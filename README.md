# 🚀 SybTech Chat Widget - Production Backend

**AI-Powered Sales Assistant with Discord Lead Capture**

A production-ready Flask backend for the SybTech AI chat widget, optimized for Vercel serverless deployment. Features secure OpenAI API integration with `gpt-4o-mini` and automated Discord notifications for lead capture.

---

## 📋 Features

✅ **Secure Backend Architecture**
- OpenAI API keys and Discord webhooks hidden from frontend
- Environment variable-based configuration
- CORS enabled for cross-origin requests

✅ **AI Sales Assistant (Mohamed Persona)**
- Bilingual support (Arabic/English)
- Professional sales conversation flow
- Lead capture with name + phone validation

✅ **Discord Integration**
- Rich embed notifications for new leads
- Automatic lead data parsing
- Real-time notifications

✅ **Vercel Optimized**
- Serverless function configuration
- Production-ready deployment
- Auto-scaling and global CDN

---

## 🏗️ File Structure

```
sybtech-website/
├── api/
│   └── index.py          # Main Flask backend (Vercel entry point)
├── static/               # Frontend assets (CSS, JS, images)
├── *.html                # Website pages
├── vercel.json           # Vercel deployment configuration
├── requirements.txt      # Python dependencies
├── .env                  # Environment variables (NEVER commit!)
├── .env.example          # Template for environment setup
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone & Install Dependencies

```bash
# Clone the repository
git clone <your-repo-url>
cd sybtech-website

# Create virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 2️⃣ Configure Environment Variables

```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your actual keys:
# - OPENAI_API_KEY (from https://platform.openai.com/api-keys)
# - DISCORD_WEBHOOK_URL (from Discord Server Settings > Webhooks)
```

### 3️⃣ Run Locally

```bash
# Run the Flask development server
python api/index.py

# Server will start at: http://localhost:5000
# Test health endpoint: http://localhost:5000/api/health
```

### 4️⃣ Test the Chat Endpoint

```bash
# Test with curl (PowerShell)
$body = @{
    messages = @(
        @{
            role = "user"
            content = "Hello, I need a website"
        }
    )
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/chat" -Method POST -Body $body -ContentType "application/json"
```

---

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts and add environment variables when asked
```

### Option 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. **Add Environment Variables:**
   - `OPENAI_API_KEY` → Your OpenAI API key
   - `DISCORD_WEBHOOK_URL` → Your Discord webhook URL
5. Click "Deploy"

---

## 🔐 Environment Variables (Vercel Dashboard)

After deploying, add these in **Project Settings > Environment Variables**:

| Variable Name          | Description                           | Example                          |
|------------------------|---------------------------------------|----------------------------------|
| `OPENAI_API_KEY`       | OpenAI API key for GPT-4o-mini        | `sk-proj-...`                    |
| `DISCORD_WEBHOOK_URL`  | Discord webhook for lead notifications| `https://discord.com/api/...`    |

---

## 📡 API Endpoints

### `POST /api/chat`
Send chat messages to the AI assistant.

**Request:**
```json
{
  "messages": [
    {
      "role": "user",
      "content": "I need a website"
    }
  ]
}
```

**Response:**
```json
{
  "message": "مرحباً! أنا محمد من SybTech. ازيك؟ ممكن أعرف اسم حضرتك؟"
}
```

### `GET /api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "service": "SybTech Chat Backend",
  "version": "2.0.0",
  "model": "gpt-4o-mini"
}
```

---

## 🎨 Frontend Integration

Update your JavaScript to use the deployed backend:

```javascript
// For local development
const API_URL = 'http://localhost:5000/api/chat';

// For production (replace with your Vercel domain)
const API_URL = 'https://your-project.vercel.app/api/chat';

async function sendMessage(message) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messages: conversationHistory
        })
    });
    
    const data = await response.json();
    return data.message;
}
```

---

## 🧪 Testing

### Local Testing
```bash
# Run the Flask app
python api/index.py

# In another terminal, test the endpoint
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Hello"}]}'
```

### Production Testing
```bash
# Replace with your Vercel URL
curl -X POST https://your-project.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"مرحباً"}]}'
```

---

## 🛠️ Troubleshooting

### Build Fails on Vercel
- Ensure `requirements.txt` has exact versions
- Check Vercel build logs for specific errors
- Verify `vercel.json` configuration

### Environment Variables Not Working
- Double-check variable names match exactly
- Re-deploy after adding new variables
- Check Vercel dashboard for typos

### CORS Errors
- Verify your domain is in the CORS origins list in `api/index.py`
- Update CORS configuration for production domains

### OpenAI API Errors
- Verify API key is valid and has credits
- Check you're using `gpt-4o-mini` model
- Review OpenAI usage dashboard

---

## 📞 Support

**Developer:** Senior Full-Stack Engineer  
**Project:** SybTech AI Chat Widget  
**License:** Proprietary  

---

## 🔄 Version History

- **v2.0.0** - Vercel production deployment
- **v1.0.0** - Initial Flask backend with local development

---

Made with ❤️ by SybTech | Powered by AI 🚀
