# 🚀 Deployment Checklist - Loop Energy

## ✅ Pre-Deployment Completed

- [x] **Security Audit**: Comprehensive security fixes implemented
- [x] **Documentation**: README.md updated with full setup guide
- [x] **Dependencies**: All packages updated, 0 vulnerabilities
- [x] **Build**: Production build successful
- [x] **Git**: All changes committed and pushed to GitHub
- [x] **.gitignore**: Properly configured to exclude sensitive files
- [x] **Environment Template**: .env.example provided

---

## 📋 Netlify Deployment Steps

### 1. Connect to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize access
4. Select repository: `lewisgithinji/loopenergy`

### 2. Configure Build Settings

```
Build command: npm run build
Publish directory: out
Node version: 18
```

### 3. Set Environment Variables

Go to **Site settings → Environment variables** and add:

**Required:**
```
NEXT_PUBLIC_SITE_URL=https://YOUR-SITE-NAME.netlify.app
NEXT_PUBLIC_SITE_NAME=Loop Energy Limited
NODE_ENV=production
```

**Optional (for AI chat):**
```
ANTHROPIC_API_KEY=your_actual_api_key_here
```

**Optional (for analytics):**
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 4. ⚠️ CRITICAL: Update ALLOWED_ORIGINS

**Before the first deployment**, you MUST update the allowed origins in these files:

**File 1**: `netlify/functions/contact.js` (lines 38-42)
```javascript
const ALLOWED_ORIGINS = [
  'https://YOUR-ACTUAL-SITE.netlify.app',  // ← UPDATE THIS
  'https://loopenergy.co.ke',
  // 'http://localhost:3000',  // ← REMOVE for production
];
```

**File 2**: `app/api/chat/route.ts` (lines 6-10)
```typescript
const ALLOWED_ORIGINS = [
  'https://YOUR-ACTUAL-SITE.netlify.app',  // ← UPDATE THIS
  'https://loopenergy.co.ke',
  // 'http://localhost:3000',  // ← REMOVE for production
];
```

**Steps:**
1. Get your Netlify site URL after first deploy (e.g., `https://loopenergy-xyz123.netlify.app`)
2. Update both files with the actual URL
3. Remove `localhost:3000` from production
4. Commit and push changes
5. Netlify will auto-redeploy

### 5. Deploy

Click **"Deploy site"** - Netlify will:
- Install dependencies
- Run build
- Deploy to CDN
- Enable HTTPS automatically

---

## 🧪 Post-Deployment Testing

### Security Headers Verification

1. Open your deployed site
2. Press **F12** → **Network** tab → Reload page
3. Click any request → **Headers** section
4. Verify these are present:

```
✅ content-security-policy
✅ strict-transport-security
✅ x-frame-options: DENY
✅ x-content-type-options: nosniff
✅ permissions-policy
```

### Contact Form Testing

1. **Valid Submission**:
   - Fill form with valid data
   - Should succeed with success message

2. **XSS Protection**:
   - Try: `<script>alert('xss')</script>` in message
   - Should be rejected with validation error

3. **Rate Limiting**:
   - Submit form 5 times rapidly
   - 6th submission should return 429 error
   - Should see "Too many requests" message

4. **CSRF Protection**:
   - Use curl from different origin:
   ```bash
   curl -X POST https://your-site.netlify.app/.netlify/functions/contact \
     -H "Content-Type: application/json" \
     -H "Origin: https://evil.com" \
     -d '{"firstName":"Test","lastName":"User","email":"test@test.com","message":"Test message"}'
   ```
   - Should return 403 Forbidden

### Chat API Testing (if enabled)

1. Test valid message
2. Test oversized message (1000+ chars) - should be rejected
3. Verify 30-second timeout doesn't hang

---

## 📊 Monitoring Setup

### Netlify Function Logs

Monitor for security events:
- `[SECURITY] CSRF violation detected`
- `[SECURITY] Rate limit exceeded`
- `[SECURITY] Validation failure`

**Access logs**: Site settings → Functions → View logs

### Alerts Setup

Set up alerts for:
- Failed function invocations
- High error rates (>5%)
- Unusual traffic patterns

---

## 🔒 Security Maintenance

### Weekly

- [ ] Check Netlify function logs for security events
- [ ] Run `npm audit` locally and fix vulnerabilities
- [ ] Review rate limiting effectiveness

### Monthly

- [ ] Update dependencies: `npm update`
- [ ] Review CSP violations (browser console)
- [ ] Test all security features
- [ ] Review and rotate API keys if needed

### Quarterly

- [ ] Full security audit
- [ ] Review and update ALLOWED_ORIGINS
- [ ] Update Node.js version if needed
- [ ] Review Netlify security settings

---

## 📞 Support Contacts

### Technical Issues
- **Developer**: SirLewis - https://sirlewis.pages.dev/
- **GitHub**: https://github.com/lewisgithinji/loopenergy

### Domain & Hosting
- **Client**: Datacare Solutions - https://datacare.co.ke
- **Netlify Support**: https://www.netlify.com/support/

---

## 🔗 Important Links

- **GitHub Repository**: https://github.com/lewisgithinji/loopenergy
- **Security Documentation**: [SECURITY_FIXES.md](SECURITY_FIXES.md)
- **Setup Guide**: [README.md](README.md)
- **Netlify Dashboard**: https://app.netlify.com
- **Anthropic API**: https://console.anthropic.com

---

## ✨ What's Been Implemented

### Security Features
- ✅ Content Security Policy (CSP)
- ✅ HTTP Strict Transport Security (HSTS)
- ✅ CSRF Protection
- ✅ Rate Limiting (5/15min, 20/5min)
- ✅ Input Validation (Zod)
- ✅ XSS Protection
- ✅ SQL Injection Prevention
- ✅ Secure Error Handling
- ✅ Security Event Logging

### Documentation
- ✅ Comprehensive README
- ✅ Security implementation guide
- ✅ API documentation
- ✅ Testing procedures
- ✅ Deployment guide

### Code Quality
- ✅ TypeScript strict mode
- ✅ 0 npm vulnerabilities
- ✅ Build passing
- ✅ React Hook Form integration
- ✅ Proper error boundaries

---

**Ready to deploy! 🚀**

For any issues during deployment, refer to:
1. [README.md](README.md) - Setup instructions
2. [SECURITY_FIXES.md](SECURITY_FIXES.md) - Security details
3. Netlify build logs - Deployment issues
