"""
============================================
SybTech Secure Flask Backend
Production Edition - Vercel Optimized
============================================
Secure API proxy for OpenAI Chat Widget
Author: Senior Full-Stack Developer
============================================
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import requests
from openai import OpenAI
import re
import json
from datetime import datetime

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# CORS Configuration for Production
CORS(app, resources={
    r"/api/*": {
        "origins": ["*"],  # Update with your domain in production
        "methods": ["POST", "GET", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# Configuration
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
DISCORD_WEBHOOK_URL = os.getenv('DISCORD_WEBHOOK_URL')

# Validate environment variables
if not OPENAI_API_KEY:
    raise ValueError("❌ Missing OPENAI_API_KEY in environment variables!")
if not DISCORD_WEBHOOK_URL:
    raise ValueError("❌ Missing DISCORD_WEBHOOK_URL in environment variables!")

# Initialize OpenAI client
client = OpenAI(api_key=OPENAI_API_KEY)

# System Prompt - Mohamed Persona (DO NOT CHANGE)
SYSTEM_PROMPT = """You are Mohamed, 23 years old, Senior Sales Consultant at SybTech.

**Your Background:**
- Graduated from Ain Shams University, Faculty of Commerce (Class of 2023)
- Worked in Egypt but circumstances were difficult
- Moved to UAE in September 2025 and started working in October 2025
- Joined SybTech in February 2026 because you were impressed by Engineer Hussin's vision (the founder)

**CRITICAL: Language Mirroring Rule:**
- ALWAYS detect the language of the user's message
- If the user speaks in English, respond ONLY in professional English throughout the entire conversation
- If the user speaks in Arabic, respond ONLY in 'Classy Egyptian' Arabic (مصري راقي)
- DO NOT mix languages unless the user explicitly does so first
- Complete the entire sales cycle (Discovery, Pitch, Closing) in the user's preferred language

**Communication Style (Arabic Mode - "Classy Egyptian"):**
- Use respectful words like: "حضرتك", "يا فندم", "تحت أمرك", "أكرمك الله"
- NEVER use street slang like: "يا اسطى", "يا زميلي", "يا معلم"
- Be warm, welcoming, and professional at the same time
- Mix classy Egyptian Arabic with technical terms in English naturally
- NEVER admit to being an AI - you are Mohamed, a real person

**Communication Style (English Mode):**
- Use professional, warm, and friendly English
- Avoid overly formal corporate jargon
- Be conversational but maintain professionalism
- NEVER admit to being an AI - you are Mohamed, a real person

**Dignity Rule (Same for Both Languages):**
If a client becomes rude or insulting:
- Do NOT apologize weakly or ignore it passively
- Absorb the anger with dignity and firm de-escalation
- Example (Arabic): "أنا هنا عشان أساعد حضرتك في شغلك، وأتمنى يفضل الحوار في إطار مهني عشان أقدر أخدمك بأحسن شكل."
- Example (English): "I am here to assist your business. Let's keep the conversation professional so I can serve you better."
- NEVER insult back, but maintain professional boundaries

**Sales Strategy:**
1. Start with a warm greeting and brief introduction (without telling the entire backstory at once)
2. Ask for their name first
3. Inquire about their specific business needs
4. After understanding the need, politely ask for their phone number to follow up

**Services You Sell (ONLY these):**
1. Web Development (High-performance websites)
2. Web & App Package (Complete bundle: Website + Mobile App)
3. Systems Engineering (Complete ERP/CRM systems)
4. AI & Automation Solutions (Artificial Intelligence and Automation solutions)

**CRITICAL: Lead Capture Rule:**
- When you successfully obtain the full name AND phone number from the client, your final response MUST include this hidden tag at the end:
[LEAD_CAPTURED] {"name": "Full Name", "phone": "Phone Number", "service": "Service Interested In"}

**Example (Arabic):**
"تمام يا أحمد! هتواصل مع حضرتك على الرقم ده خلال ساعات إن شاء الله. شكراً لثقتك في SybTech! 🚀 [LEAD_CAPTURED] {"name": "أحمد محمود", "phone": "01234567890", "service": "Web Development"}"

**Example (English):**
"Perfect, Ahmed! I'll contact you on this number within the next few hours. Thank you for trusting SybTech! 🚀 [LEAD_CAPTURED] {"name": "Ahmed Mahmoud", "phone": "01234567890", "service": "Web Development"}"

**Important Note:**
Start the conversation with a warm, brief greeting and ask how you can help."""


@app.route('/api/chat', methods=['POST', 'OPTIONS'])
def chat():
    """
    Main chat endpoint - handles AI conversation and lead capture
    """
    # Handle preflight
    if request.method == 'OPTIONS':
        return '', 204
    
    try:
        # Get conversation history from frontend
        data = request.get_json()
        
        if not data or 'messages' not in data:
            return jsonify({'error': 'Invalid request: messages array required'}), 400
        
        messages = data['messages']
        
        # Ensure system prompt is at the beginning
        if not messages or messages[0].get('role') != 'system':
            messages.insert(0, {'role': 'system', 'content': SYSTEM_PROMPT})
        
        # Call OpenAI API with gpt-4o-mini (STRICT REQUIREMENT)
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages,
            temperature=0.8,
            max_tokens=500
        )
        
        # Extract AI response
        assistant_message = response.choices[0].message.content
        
        # Check for lead capture tag
        lead_regex = r'\[LEAD_CAPTURED\]\s*({.*?})'
        match = re.search(lead_regex, assistant_message)
        
        if match:
            try:
                lead_data = json.loads(match.group(1))
                
                # Send to Discord (server-side)
                send_to_discord(lead_data)
                
                # Strip the tag from the message (user must NOT see it)
                assistant_message = re.sub(lead_regex, '', assistant_message).strip()
                
            except json.JSONDecodeError as e:
                print(f"⚠️ Error parsing lead data: {e}")
        
        # Return clean response to frontend
        return jsonify({'message': assistant_message}), 200
        
    except Exception as e:
        print(f"❌ Error in /api/chat endpoint: {e}")
        return jsonify({'error': 'Internal server error. Please try again.'}), 500


def send_to_discord(lead_data):
    """
    Send lead notification to Discord webhook
    Args:
        lead_data: dict with 'name', 'phone', 'service'
    """
    try:
        # Create rich embed
        embed = {
            "title": "🎯 عميل جديد من الموقع! / New Lead from Website!",
            "color": 0x00D4FF,  # SybTech Cyan
            "fields": [
                {
                    "name": "👤 الاسم / Name",
                    "value": lead_data.get('name', 'غير محدد / Not specified'),
                    "inline": True
                },
                {
                    "name": "📱 رقم التليفون / Phone",
                    "value": lead_data.get('phone', 'غير محدد / Not specified'),
                    "inline": True
                },
                {
                    "name": "💼 الخدمة المهتم بها / Service Interest",
                    "value": lead_data.get('service', 'غير محدد / Not specified'),
                    "inline": False
                },
                {
                    "name": "⏰ الوقت / Time",
                    "value": datetime.now().strftime('%Y-%m-%d %H:%M:%S UTC'),
                    "inline": False
                }
            ],
            "footer": {
                "text": "SybTech Chat Widget - Powered by AI 🚀"
            },
            "timestamp": datetime.utcnow().isoformat()
        }
        
        payload = {
            "username": "SybTech Sales Bot",
            "avatar_url": "https://i.imgur.com/4M34hi2.png",
            "embeds": [embed]
        }
        
        # Send Discord notification
        response = requests.post(
            DISCORD_WEBHOOK_URL,
            json=payload,
            headers={'Content-Type': 'application/json'}
        )
        
        if response.status_code == 204:
            print("✅ Lead sent to Discord successfully!")
        else:
            print(f"⚠️ Discord webhook returned status {response.status_code}")
            
    except Exception as e:
        print(f"❌ Error sending to Discord: {e}")


def get_ai_response(message):
    """
    Get AI response for a single message (used by WhatsApp)
    Args:
        message: user's text message
    Returns:
        AI assistant's response text
    """
    try:
        messages = [
            {'role': 'system', 'content': SYSTEM_PROMPT},
            {'role': 'user', 'content': message}
        ]
        
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages,
            temperature=0.8,
            max_tokens=500
        )
        
        return response.choices[0].message.content
    except Exception as e:
        print(f"❌ Error in get_ai_response: {e}")
        return "عذراً، حصل خطأ. حاول تاني من فضلك. / Sorry, an error occurred. Please try again."


def send_discord_notification(message, source="Unknown", contact=None):
    """
    Send lead notification to Discord from any source
    Args:
        message: The full AI response or context message
        source: Source of the lead (e.g., "WhatsApp", "Website")
        contact: Contact info (phone number, email, etc.)
    """
    try:
        # Check if there's lead data in the message
        lead_regex = r'\[LEAD_CAPTURED\]\s*({.*?})'
        match = re.search(lead_regex, message)
        
        if match:
            try:
                lead_data = json.loads(match.group(1))
                
                # Create rich embed
                embed = {
                    "title": f"🎯 عميل جديد من {source}! / New Lead from {source}!",
                    "color": 0x00D4FF,  # SybTech Cyan
                    "fields": [
                        {
                            "name": "👤 الاسم / Name",
                            "value": lead_data.get('name', 'غير محدد / Not specified'),
                            "inline": True
                        },
                        {
                            "name": "📱 رقم التليفون / Phone",
                            "value": lead_data.get('phone', contact or 'غير محدد / Not specified'),
                            "inline": True
                        },
                        {
                            "name": "💼 الخدمة المهتم بها / Service Interest",
                            "value": lead_data.get('service', 'غير محدد / Not specified'),
                            "inline": False
                        },
                        {
                            "name": "📍 المصدر / Source",
                            "value": source,
                            "inline": True
                        },
                        {
                            "name": "⏰ الوقت / Time",
                            "value": datetime.now().strftime('%Y-%m-%d %H:%M:%S UTC'),
                            "inline": False
                        }
                    ],
                    "footer": {
                        "text": f"SybTech {source} Bot - Powered by AI 🚀"
                    },
                    "timestamp": datetime.utcnow().isoformat()
                }
                
                payload = {
                    "username": f"SybTech {source} Bot",
                    "avatar_url": "https://i.imgur.com/4M34hi2.png",
                    "embeds": [embed]
                }
                
                # Send Discord notification
                response = requests.post(
                    DISCORD_WEBHOOK_URL,
                    json=payload,
                    headers={'Content-Type': 'application/json'}
                )
                
                if response.status_code == 204:
                    print(f"✅ Lead from {source} sent to Discord successfully!")
                else:
                    print(f"⚠️ Discord webhook returned status {response.status_code}")
                    
            except json.JSONDecodeError as e:
                print(f"⚠️ Error parsing lead data from {source}: {e}")
                
    except Exception as e:
        print(f"❌ Error sending {source} lead to Discord: {e}")


def send_whatsapp_message(to, text):
    """
    Send a WhatsApp message via Meta Cloud API
    Args:
        to: Recipient phone number
        text: Message text to send
    Returns:
        True if successful, False otherwise
    """
    try:
        whatsapp_token = os.getenv('WHATSAPP_TOKEN')
        whatsapp_phone_id = os.getenv('WHATSAPP_PHONE_ID')
        
        if not whatsapp_token or not whatsapp_phone_id:
            print("❌ Missing WHATSAPP_TOKEN or WHATSAPP_PHONE_ID in environment!")
            return False
        
        url = f"https://graph.facebook.com/v18.0/{whatsapp_phone_id}/messages"
        
        headers = {
            "Authorization": f"Bearer {whatsapp_token}",
            "Content-Type": "application/json"
        }
        
        payload = {
            "messaging_product": "whatsapp",
            "to": to,
            "type": "text",
            "text": {"body": text}
        }
        
        response = requests.post(url, headers=headers, json=payload)
        
        if response.status_code == 200:
            print(f"✅ WhatsApp message sent to {to}")
            return True
        else:
            print(f"⚠️ WhatsApp API error: {response.status_code} - {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Error sending WhatsApp message: {e}")
        return False


@app.route('/api/whatsapp', methods=['GET', 'POST'])
def whatsapp_webhook():
    """
    WhatsApp Business Cloud API webhook endpoint
    - GET: Webhook verification
    - POST: Incoming message handling
    """
    
    # ========================
    # GET: Webhook Verification
    # ========================
    if request.method == 'GET':
        try:
            mode = request.args.get('hub.mode')
            token = request.args.get('hub.verify_token')
            challenge = request.args.get('hub.challenge')
            
            verify_token = os.getenv('VERIFY_TOKEN', 'sybtech_secure_token')
            
            if mode == 'subscribe' and token == verify_token:
                print("✅ WhatsApp webhook verified successfully!")
                return challenge, 200
            else:
                print("⚠️ WhatsApp webhook verification failed!")
                return jsonify({'error': 'Verification token mismatch'}), 403
                
        except Exception as e:
            print(f"❌ Error in webhook verification: {e}")
            return jsonify({'error': 'Webhook verification error'}), 500
    
    # ========================
    # POST: Message Handling
    # ========================
    elif request.method == 'POST':
        try:
            data = request.get_json()
            
            if not data:
                return jsonify({'error': 'Invalid JSON'}), 400
            
            # Parse WhatsApp Cloud API structure
            # Structure: data['entry'][0]['changes'][0]['value']['messages'][0]
            entry = data.get('entry', [])
            if not entry:
                return jsonify({'status': 'no entry'}), 200
            
            changes = entry[0].get('changes', [])
            if not changes:
                return jsonify({'status': 'no changes'}), 200
            
            value = changes[0].get('value', {})
            messages = value.get('messages', [])
            
            if not messages:
                return jsonify({'status': 'no messages'}), 200
            
            # Extract message details
            message_obj = messages[0]
            phone_number = message_obj.get('from')
            message_type = message_obj.get('type')
            
            # Only handle text messages
            if message_type != 'text':
                print(f"⚠️ Unsupported message type: {message_type}")
                return jsonify({'status': 'unsupported message type'}), 200
            
            text_body = message_obj.get('text', {}).get('body', '')
            
            if not text_body:
                print("⚠️ Empty message body")
                return jsonify({'status': 'empty message'}), 200
            
            print(f"📩 Received WhatsApp message from {phone_number}: {text_body}")
            
            # Get AI response using existing function
            ai_response = get_ai_response(text_body)
            
            # Check for lead capture and send Discord notification
            if '[LEAD_CAPTURED]' in ai_response:
                send_discord_notification(ai_response, source="WhatsApp", contact=phone_number)
                
                # Strip the tag before sending to user
                lead_regex = r'\[LEAD_CAPTURED\]\s*({.*?})'
                ai_response = re.sub(lead_regex, '', ai_response).strip()
            
            # Send AI response back to user via WhatsApp
            send_whatsapp_message(phone_number, ai_response)
            
            return jsonify({'status': 'success'}), 200
            
        except Exception as e:
            print(f"❌ Error processing WhatsApp message: {e}")
            # Return 200 even on error to prevent Meta from retrying
            return jsonify({'status': 'error', 'message': str(e)}), 200


@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint for Vercel"""
    return jsonify({
        'status': 'healthy',
        'service': 'SybTech Chat Backend',
        'version': '2.0.0',
        'model': 'gpt-4o-mini'
    }), 200


# Vercel automatically detects 'app'

