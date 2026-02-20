# SybTech WhatsApp AI Bot - Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up MongoDB
Install MongoDB locally or use MongoDB Atlas (cloud):
- **Local:** Download from [mongodb.com](https://www.mongodb.com/try/download/community)
- **Cloud:** Create free cluster at [mongodb.com/atlas](https://www.mongodb.com/cloud/atlas)

### 3. Configure Environment Variables
Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

**Required variables:**
- `OPENAI_API_KEY` - Your OpenAI API key
- `MONGODB_URI` - MongoDB connection string

**Optional but recommended:**
- `DISCORD_WEBHOOK_URL` - For hot lead notifications
- `GOOGLE_CALENDAR_CREDENTIALS` - For meeting booking

### 4. Run the Bot
```bash
npm start
```

Scan the QR code with your WhatsApp mobile app!

---

## 📋 Feature Configuration

### Enable/Disable Features
Edit your `.env` file:

```bash
ENABLE_SESSION_MEMORY=true       # Context memory
ENABLE_LEAD_SCORING=true         # Auto lead qualification
ENABLE_VOICE_RESPONSES=false     # TTS responses (costs extra)
ENABLE_RATE_LIMITING=true        # Spam protection
```

### Adjust Human Delay (Important!)
```bash
MIN_DELAY_SECONDS=5
MAX_DELAY_SECONDS=30
```

---

## 🎯 Testing the Bot

1. **Send a text message** → Check delay works (5-30s)
2. **Send "عايز سعر"** → Should trigger hot lead notification
3. **Send "عايز أكلم حد"** → Should escalate to human
4. **Send voice note** → Bot transcribes and responds
5. **Ask for "demo video"** → Should send media (if configured)

---

## 📊 Analytics Dashboard

Start the dashboard server:
```bash
npm run dashboard
```

Visit: `http://localhost:3000`

---

## 🔧 Advanced Setup

### Google Calendar Integration
1. Create Google Cloud project
2. Enable Calendar API
3. Create service account
4. Download credentials JSON
5. Save to `./config/google-credentials.json`
6. Update `.env`:
   ```bash
   GOOGLE_CALENDAR_CREDENTIALS=./config/google-credentials.json
   GOOGLE_CALENDAR_ID=your-calendar-id@group.calendar.google.com
   ```

### Discord Webhook
1. Open Discord server settings
2. Go to Integrations > Webhooks
3. Create webhook, copy URL
4. Update `.env`:
   ```bash
   DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...
   ```

---

## 📁 Media Library Setup

Create media folder:
```bash
mkdir media
```

Add your files:
- `media/demo_video.mp4`
- `media/case_study.pdf`
- `media/pricing.pdf`
- `media/brochure.pdf`

---

## 🛡️ Security Best Practices

1. **Never commit `.env`** - Already in `.gitignore`
2. **Use strong MongoDB password**
3. **Enable rate limiting** in production
4. **Regularly backup database**

---

## ❓ Troubleshooting

### QR Code not appearing?
- Check internet connection
- Restart the bot: `npm start`

### Database connection failed?
- Verify `MONGODB_URI` in `.env`
- Check MongoDB service is running

### Voice transcription not working?
- Ensure valid `OPENAI_API_KEY`
- Check audio file format support

---

## 📞 Support

For issues, contact: hussein@sybtech.com
