import { NextRequest, NextResponse } from 'next/server'
import { chatMessageSchema } from '@/lib/validation'
import { safeError, logSecurityEvent } from '@/lib/error-handler'

// CSRF Protection - Allowed origins
const ALLOWED_ORIGINS = [
  'https://loopenergy.netlify.app',
  'https://loopenergy.co.ke',
  'http://localhost:3000', // Development only
];

function validateOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');

  const source = origin || referer;
  if (!source) return false;

  try {
    const sourceUrl = new URL(source);
    return ALLOWED_ORIGINS.some(allowed => {
      const allowedUrl = new URL(allowed);
      return sourceUrl.hostname === allowedUrl.hostname;
    });
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // CSRF Protection
    if (!validateOrigin(request)) {
      logSecurityEvent('csrf_violation', {
        endpoint: '/api/chat',
        origin: request.headers.get('origin'),
        referer: request.headers.get('referer'),
      });
      return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
    }

    // Parse and validate request body
    const body = await request.json();
    const validationResult = chatMessageSchema.safeParse(body);

    if (!validationResult.success) {
      logSecurityEvent('validation_failure', {
        endpoint: '/api/chat',
        errors: validationResult.error.errors,
      });
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validationResult.error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    const { message, history } = validationResult.data;

    // Check if Anthropic API key is available
    const apiKey = process.env.ANTHROPIC_API_KEY

    if (!apiKey) {
      // Fallback to scripted responses
      return NextResponse.json({
        message: "Thank you for your message! For immediate assistance, please call us at +254 722 517923 or email loopenergy01@gmail.com. Our team is available Monday-Friday, 8AM-6PM EAT."
      })
    }

    // Prepare context about Loop Energy
    const companyContext = `
    You are a helpful customer service representative for Loop Energy Limited, a Kenyan company founded in 2013, incorporated in 2018. 

    Company Overview:
    - Independent reseller for bulk petroleum products
    - Infrastructure development and construction
    - Equipment hire services
    - Operating primarily in Kenya with expansion across East & Central Africa

    Services:
    1. Petroleum & Logistics: Diesel (AGO), Petrol (PMS), Paraffin (IK), Heavy Fuel Oil (HFO), LPG, Jet Fuel, Aviation Gasoline, Bitumen
    2. Infrastructure: Civil engineering, building construction, power infrastructure up to 400kV, project management
    3. Equipment Hire: Excavators, graders, dozers, cranes, rollers, mixers, tippers, bowsers
    4. Lubricants: Automotive and industrial lubricants
    5. Chemicals: Polymers, solvents, fertilizers
    6. Retail: Fuel station design and development

    Contact Information:
    - Address: Kindaruma Courts, Kindaruma Road, Nairobi
    - Phone: +254 722 517923 / +254 731 624225  
    - Email: loopenergy01@gmail.com
    - Postal: P.O. Box 2596-20100, Nakuru, Kenya

    Team: 70+ permanent staff, 400+ part-time community workers

    Respond professionally and helpfully to customer inquiries. If you don't know specific details, direct them to call or email for more information.
    `

    // Build conversation history for context
    // Sanitize and truncate message and history
    const sanitizedMessage = message.substring(0, 500);
    const sanitizedHistory = history.slice(-5).map((msg) => ({
      role: msg.isUser ? "user" : "assistant",
      content: msg.text.substring(0, 500),
    }));

    const messages = [
      { role: "system", content: companyContext },
      ...sanitizedHistory,
      { role: "user", content: sanitizedMessage }
    ];

    // Call Anthropic API with timeout
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-3-sonnet-20240229",
        max_tokens: 300,
        messages: messages
      }),
      signal: AbortSignal.timeout(30000) // 30 second timeout
    });

    if (!response.ok) {
      console.error('Anthropic API error:', response.status);
      throw new Error('AI_SERVICE_ERROR');
    }

    const data = await response.json();
    const aiResponse = data.content[0].text;

    return NextResponse.json({ message: aiResponse });

  } catch (error) {
    // Use safe error handler
    const errorResponse = safeError(
      error,
      "I apologize, but I'm having trouble responding right now. Please call us at +254 722 517923 or email loopenergy01@gmail.com for immediate assistance."
    );

    return NextResponse.json(
      { message: errorResponse.error },
      { status: 500 }
    );
  }
}
