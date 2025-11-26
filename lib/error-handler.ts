/**
 * Safe error handler that prevents information leakage in production
 */
export function safeError(error: unknown, publicMessage = 'An error occurred') {
  const isDevelopment = process.env.NODE_ENV === 'development';

  // Always log full error details server-side
  console.error('[Error]', {
    message: error instanceof Error ? error.message : 'Unknown error',
    stack: error instanceof Error ? error.stack : undefined,
    timestamp: new Date().toISOString(),
  });

  // In development, include error details for debugging
  if (isDevelopment && error instanceof Error) {
    return {
      error: publicMessage,
      details: {
        message: error.message,
        type: error.name,
      },
    };
  }

  // In production, only return generic message
  return { error: publicMessage };
}

/**
 * Log security events
 */
export function logSecurityEvent(
  type: 'csrf_violation' | 'rate_limit_exceeded' | 'validation_failure' | 'suspicious_activity',
  details: Record<string, unknown>
) {
  console.warn('[SECURITY]', {
    type,
    timestamp: new Date().toISOString(),
    ...details,
  });
}
