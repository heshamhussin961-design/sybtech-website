# 🚀 Quick Start Guide - 5 Minutes to Launch!

## Step 1️⃣: Install Dependencies (2 min)

```bash
npm install
```

This installs:
- WhatsApp Web client
- OpenAI API
- MongoDB driver
- All 16 feature modules

---

## Step 2️⃣: Setup Environment (1 min)

```bash
# Copy template
cp .env.example .env

# Edit .env and add ONLY these 2 required keys:
OPENAI_API_KEY=sk-...your-key-here...
MONGODB_URI=mongodb://localhost:27017/sybtech_whatsapp
```

**Note:** Other features (Calendar, Discord, Telegram) are optional!

---

## Step 3️⃣: Start MongoDB (1 min)

### Option A: Local MongoDB
```bash
mongod --dbpath ./data/db
```

### Option B: MongoDB Atlas (Cloud - Recommended!)
1. Create free cluster at [mongodb.com/atlas](https://www.mongodb.com/cloud/atlas)
2. Copy connection string to `.env`

---

## Step 4️⃣: Run the Bot! (30 seconds)

```bash
npm start
```

**You'll see:**
- QR code in terminal
- Scan with WhatsApp mobile app
- ✅ Bot goes live!

---

## Step 5️⃣: Test It! (30 seconds)

Send a message from another WhatsApp account:

```
مرحبا! عايز أعرف عن خدماتكم
```

**The bot will:**
- ⏱️ Wait 5-30 seconds (human-like)
- ⌨️ Show "typing..."
- 💬 Respond naturally in Egyptian Arabic
- 💾 Remember the conversation

---

## 🎨 Bonus: Analytics Dashboard

In a new terminal:

```bash
npm run dashboard
```

Visit: **http://localhost:3000**

---

## ✅ Verification Checklist

After first message, verify:

- [ ] Bot waited 5-30 seconds before replying
- [ ] Typing indicator appeared
- [ ] Response in Egyptian dialect (if you wrote Arabic)
- [ ] Conversation saved in MongoDB

**Congratulations! 🎉 Your enterprise WhatsApp bot is LIVE!**

---

## 🔧 Optional Features Setup

### Enable Hot Lead Notifications (Discord)

1. Create Discord webhook
2. Add to `.env`:
   ```bash
   DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...
   ENABLE_LEAD_SCORING=true
   ```
3. Restart bot
4. Now when someone says "عايز سعر" → Discord notification! 🔔

### Enable Calendar Booking (Google)

1. Create Google Cloud project
2. Enable Calendar API
3. Download credentials JSON
4. Save to `./config/google-credentials.json`
5. Add to `.env`:
   ```bash
   GOOGLE_CALENDAR_CREDENTIALS=./config/google-credentials.json
   GOOGLE_CALENDAR_ID=your-calendar@group.calendar.google.com
   ```

---

## 🆘 Troubleshooting

### "QR code not showing"
- Check internet connection
- Restart: `npm start`

### "MongoDB connection failed"
- Verify MongoDB is running
- Check `MONGODB_URI` in `.env`

### "OpenAI error"
- Verify `OPENAI_API_KEY` is valid
- Check your OpenAI account has credits

---

## 📚 Next Steps

✅ Read full docs: [`SETUP.md`](SETUP.md)  
✅ Explore features: [`walkthrough.md`](C:/Users/hussi/.gemini/antigravity/brain/bef11ee0-1988-498c-8e16-1f19130ef78b/walkthrough.md)  
✅ Customize bot name in `.env` → `BOT_NAME=محمد`

---

**You're ready to scale! 🚀**
