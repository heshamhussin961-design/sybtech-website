# 🔧 Troubleshooting Guide - Common Fixes

## ✅ Fixed Issues (Feb 17, 2026)

### 1. MongoDB Connection Error
**Error**: `options usenewurlparser, useunifiedtopology are not supported`

**Cause**: Deprecated MongoDB driver options

**Fix**: ✅ **FIXED!** Removed deprecated options from `database/connection.js`

---

### 2. Invalid Phone Format Error
**Error**: `🚫 Invalid phone format: 249000913563748@lid`

**Cause**: WhatsApp changed format from `@c.us` to `@lid` for some users

**Fix**: ✅ **FIXED!** Updated phone validation in `modules/security.js` to accept both formats

---

## 🚀 Next Steps

**Restart your bot:**
```bash
# Stop current bot (Ctrl+C)
npm start
```

MongoDB should now connect, and all messages will be processed! ✅

---

## ⚙️ MongoDB Setup (If Still Failing)

### Option 1: Local MongoDB
```bash
# Install MongoDB Community Edition
# https://www.mongodb.com/try/download/community

# Start MongoDB
mongod --dbpath ./data/db
```

### Option 2: MongoDB Atlas (Cloud - Recommended!)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Update `.env`:
   ```bash
   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/sybtech
   ```

---

## 📋 Quick Checks

### Verify .env file:
```bash
# Make sure these are set:
OPENAI_API_KEY=sk-...   # OpenAI key (REQUIRED)
MONGODB_URI=mongodb://localhost:27017/sybtech_whatsapp  # MongoDB (REQUIRED)
DASHBOARD_API_KEY=f34a2715...  # Already set ✅
```

### Test MongoDB Connection:
```bash
# Try connecting manually
mongosh "mongodb://localhost:27017/sybtech_whatsapp"
```

---

## 🐛 Still Having Issues?

### Check these:
- [ ] OpenAI API key is valid (starts with `sk-...`)
- [ ] MongoDB is running (`mongod` or Atlas)
- [ ] Port 27017 is not blocked
- [ ] Node.js version >= 18.0.0 (`node --version`)

---

**Status**: All fixes applied ✅ Ready to restart!
