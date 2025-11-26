const { z } = require('zod');
const { checkRateLimit } = require('./rate-limiter');

// Contact form validation schema (duplicated from lib/validation.ts for serverless function)
const contactFormSchema = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name too long')
    .regex(/^[a-zA-Z\s'-]+$/, 'Invalid characters in first name'),

  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name too long')
    .regex(/^[a-zA-Z\s'-]+$/, 'Invalid characters in last name'),

  email: z.string()
    .email('Invalid email address')
    .max(100, 'Email too long')
    .toLowerCase(),

  phone: z.string()
    .regex(/^[\d\s\-\+\(\)]+$/, 'Invalid phone number')
    .min(10, 'Phone number too short')
    .max(20, 'Phone number too long')
    .optional(),

  company: z.string().max(100, 'Company name too long').optional(),

  service: z.string().max(50).optional(),

  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message too long')
    .trim(),
});

// CSRF Protection - Allowed origins
const ALLOWED_ORIGINS = [
  'https://loopenergy.netlify.app',
  'https://loopenergy.co.ke',
  'http://localhost:3000', // Development only
];

function validateOrigin(event) {
  const origin = event.headers.origin || event.headers.referer;

  if (!origin) return false;

  try {
    const originUrl = new URL(origin);
    return ALLOWED_ORIGINS.some(allowed => {
      const allowedUrl = new URL(allowed);
      return originUrl.hostname === allowedUrl.hostname;
    });
  } catch {
    return false;
  }
}

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': process.env.SITE_URL || '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle OPTIONS preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    // CSRF Protection - Validate origin
    if (!validateOrigin(event)) {
      console.warn('[SECURITY] CSRF violation detected', {
        origin: event.headers.origin,
        referer: event.headers.referer,
        timestamp: new Date().toISOString(),
      });
      return {
        statusCode: 403,
        headers,
        body: JSON.stringify({ error: 'Invalid origin' }),
      };
    }

    // Rate Limiting
    const clientIP = event.headers['x-forwarded-for'] ||
                     event.headers['client-ip'] ||
                     'unknown';

    const rateLimitResult = checkRateLimit(clientIP, 'contact');

    if (!rateLimitResult.allowed) {
      const resetInSeconds = Math.ceil(rateLimitResult.resetIn / 1000);
      console.warn('[SECURITY] Rate limit exceeded', {
        ip: clientIP,
        timestamp: new Date().toISOString(),
      });
      return {
        statusCode: 429,
        headers: {
          ...headers,
          'Retry-After': resetInSeconds.toString(),
          'X-RateLimit-Limit': rateLimitResult.limit.toString(),
          'X-RateLimit-Remaining': '0',
        },
        body: JSON.stringify({
          error: 'Too many requests',
          message: `Please try again in ${resetInSeconds} seconds`,
        }),
      };
    }

    // Add rate limit headers to response
    headers['X-RateLimit-Limit'] = rateLimitResult.limit.toString();
    headers['X-RateLimit-Remaining'] = rateLimitResult.remaining.toString();

    // Parse and validate request body
    const body = JSON.parse(event.body);
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      console.warn('[SECURITY] Validation failure', {
        ip: clientIP,
        errors: validationResult.error.errors,
        timestamp: new Date().toISOString(),
      });
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Validation failed',
          details: validationResult.error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        }),
      };
    }

    const validatedData = validationResult.data;

    // Log sanitized submission (no sensitive data logging)
    console.log('Contact form submission:', {
      email: validatedData.email,
      hasMessage: !!validatedData.message,
      service: validatedData.service,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email using SendGrid/AWS SES/etc
    // For now, just return success

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Message sent successfully' }),
    };
  } catch (error) {
    console.error('[ERROR] Contact form error:', {
      message: error.message,
      timestamp: new Date().toISOString(),
    });

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to process request' }),
    };
  }
}