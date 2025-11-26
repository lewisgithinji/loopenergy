// In-memory rate limiting for Netlify Functions
const rateLimitStore = new Map();

const RATE_LIMITS = {
  contact: { requests: 5, window: 15 * 60 * 1000 }, // 5 requests per 15 minutes
  chat: { requests: 20, window: 5 * 60 * 1000 }, // 20 requests per 5 minutes
};

// Clean up expired entries to prevent memory leaks
function cleanupOldEntries() {
  const now = Date.now();
  for (const [key, data] of rateLimitStore.entries()) {
    if (now - data.firstRequest > data.window) {
      rateLimitStore.delete(key);
    }
  }
}

/**
 * Check if a request is within rate limit
 * @param {string} identifier - Unique identifier (usually IP address)
 * @param {string} limitType - Type of limit to apply ('contact' or 'chat')
 * @returns {Object} Result object with allowed status and remaining count
 */
exports.checkRateLimit = (identifier, limitType = 'contact') => {
  cleanupOldEntries();

  const limit = RATE_LIMITS[limitType];
  if (!limit) {
    throw new Error(`Unknown rate limit type: ${limitType}`);
  }

  const key = `${limitType}:${identifier}`;
  const now = Date.now();

  let record = rateLimitStore.get(key);

  if (!record) {
    // First request
    record = { count: 1, firstRequest: now, window: limit.window };
    rateLimitStore.set(key, record);
    return {
      allowed: true,
      remaining: limit.requests - 1,
      limit: limit.requests,
    };
  }

  // Check if window has expired
  if (now - record.firstRequest > limit.window) {
    // Reset the window
    record.count = 1;
    record.firstRequest = now;
    rateLimitStore.set(key, record);
    return {
      allowed: true,
      remaining: limit.requests - 1,
      limit: limit.requests,
    };
  }

  // Within the window
  if (record.count >= limit.requests) {
    // Rate limit exceeded
    return {
      allowed: false,
      remaining: 0,
      limit: limit.requests,
      resetIn: limit.window - (now - record.firstRequest),
    };
  }

  // Increment count
  record.count++;
  rateLimitStore.set(key, record);
  return {
    allowed: true,
    remaining: limit.requests - record.count,
    limit: limit.requests,
  };
};
