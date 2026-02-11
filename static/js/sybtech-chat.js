/**
 * ============================================
 * SybTech Global AI Sales Chat Widget
 * Premium Edition - Production Ready
 * ============================================
 * Secure Backend Architecture
 * All API keys protected via Flask backend
 * ============================================
 */

(function () {
    'use strict';

    // ============================================
    // Configuration
    // ============================================
    const CONFIG = {
        backendUrl: '/chat', // Local Flask backend endpoint
        storageKey: 'sybtech_chat_session' // Using sessionStorage instead of localStorage
    };

    const SYSTEM_PROMPT = `You are Mohamed, 23 years old, Senior Sales Consultant at SybTech.

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
Start the conversation with a warm, brief greeting and ask how you can help.`;

    // ============================================
    // Inject CSS Styles (SybTech Brand Colors)
    // ============================================
    const injectStyles = () => {
        const styleId = 'sybtech-chat-styles';
        if (document.getElementById(styleId)) return;

        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            /* SybTech Premium Chat Widget Styles */
            @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Inter:wght@300;400;600;700&display=swap');
            
            #sybtech-chat-widget * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Cairo', 'Inter', sans-serif;
            }
            
            /* SybTech Brand Colors */
            :root {
                --sybtech-navy: #050A18;
                --sybtech-navy-light: #0A1128;
                --sybtech-cyan: #00D4FF;
                --sybtech-purple: #BD00FF;
                --sybtech-text: #FFFFFF;
                --sybtech-text-dim: #94A3B8;
            }
            
            /* Gradient Animation */
            @keyframes sybtechGradientShift {
                0%, 100% { 
                    background-position: 0% 50%;
                }
                50% { 
                    background-position: 100% 50%;
                }
            }
            
            .sybtech-gradient-border {
                background: linear-gradient(135deg, var(--sybtech-cyan), var(--sybtech-purple), var(--sybtech-cyan));
                background-size: 200% 200%;
                animation: sybtechGradientShift 3s ease infinite;
            }
            
            /* Pulse Animation for Button */
            @keyframes sybtechPulse {
                0%, 100% { 
                    box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.7);
                }
                50% { 
                    box-shadow: 0 0 0 15px rgba(0, 212, 255, 0);
                }
            }
            
            .sybtech-pulse {
                animation: sybtechPulse 2s infinite;
            }
            
            /* Slide Up Animation */
            @keyframes sybtechSlideUp {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .sybtech-message-bubble {
                animation: sybtechSlideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            }
            
            /* Typing Indicator Animation */
            @keyframes sybtechTyping {
                0%, 60%, 100% { 
                    transform: translateY(0);
                    opacity: 0.4;
                }
                30% { 
                    transform: translateY(-8px);
                    opacity: 1;
                }
            }
            
            .sybtech-typing-dot {
                animation: sybtechTyping 1.4s infinite ease-in-out;
            }
            
            .sybtech-typing-dot:nth-child(2) {
                animation-delay: 0.2s;
            }
            
            .sybtech-typing-dot:nth-child(3) {
                animation-delay: 0.4s;
            }
            
            /* Glassmorphism Effect */
            .sybtech-glass {
                background: rgba(10, 17, 40, 0.85);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border: 1px solid rgba(0, 212, 255, 0.15);
            }
            
            /* Scrollbar Styling */
            .sybtech-chat-messages::-webkit-scrollbar {
                width: 6px;
            }
            
            .sybtech-chat-messages::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.03);
                border-radius: 10px;
            }
            
            .sybtech-chat-messages::-webkit-scrollbar-thumb {
                background: linear-gradient(180deg, var(--sybtech-cyan), var(--sybtech-purple));
                border-radius: 10px;
            }
            
            .sybtech-chat-messages::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(180deg, var(--sybtech-purple), var(--sybtech-cyan));
            }
            
            /* Fade Animations */
            .sybtech-fade-in {
                animation: sybtechFadeIn 0.3s ease-in;
            }
            
            @keyframes sybtechFadeIn {
                from { 
                    opacity: 0; 
                    transform: scale(0.95) translateY(10px);
                }
                to { 
                    opacity: 1; 
                    transform: scale(1) translateY(0);
                }
            }
            
            .sybtech-fade-out {
                animation: sybtechFadeOut 0.3s ease-out;
            }
            
            @keyframes sybtechFadeOut {
                from { 
                    opacity: 1; 
                    transform: scale(1) translateY(0);
                }
                to { 
                    opacity: 0; 
                    transform: scale(0.95) translateY(10px);
                }
            }
            
            /* Button Gradient Effect */
            .sybtech-btn-gradient {
                background: linear-gradient(135deg, var(--sybtech-cyan) 0%, var(--sybtech-purple) 100%);
                color: white;
                font-weight: 700;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }
            
            .sybtech-btn-gradient::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
                transition: left 0.5s ease;
            }
            
            .sybtech-btn-gradient:hover::before {
                left: 100%;
            }
            
            .sybtech-btn-gradient:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
            }
            
            /* Utility Classes */
            .sybtech-hidden { 
                display: none !important; 
            }
            
            .sybtech-flex { 
                display: flex !important; 
            }
            
            /* Mobile Responsiveness */
            @media (max-width: 640px) {
                #sybtech-chat-window {
                    width: calc(100vw - 32px) !important;
                    height: calc(100vh - 120px) !important;
                    bottom: 90px !important;
                    right: 16px !important;
                }
            }
        `;
        document.head.appendChild(style);
    };

    // ============================================
    // Inject HTML Structure
    // ============================================
    const injectHTML = () => {
        const widgetId = 'sybtech-chat-widget';
        if (document.getElementById(widgetId)) return;

        const widgetContainer = document.createElement('div');
        widgetContainer.id = widgetId;
        widgetContainer.innerHTML = `
            <!-- Chat Button (Floating) -->
            <div id="sybtech-chat-button" 
                 class="sybtech-pulse"
                 style="position: fixed; 
                        bottom: 24px; 
                        right: 24px; 
                        width: 68px; 
                        height: 68px; 
                        border-radius: 50%; 
                        cursor: pointer; 
                        z-index: 9998; 
                        padding: 3px;
                        transition: all 0.3s ease;">
                <div class="sybtech-gradient-border" 
                     style="width: 100%; 
                            height: 100%; 
                            border-radius: 50%; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center;">
                    <div style="width: calc(100% - 6px); 
                                height: calc(100% - 6px); 
                                background: var(--sybtech-navy); 
                                border-radius: 50%; 
                                display: flex; 
                                align-items: center; 
                                justify-content: center;">
                        <svg style="width: 32px; height: 32px; color: var(--sybtech-cyan);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            
            <!-- Chat Window -->
            <div id="sybtech-chat-window" 
                 class="sybtech-glass sybtech-hidden"
                 style="position: fixed; 
                        bottom: 110px; 
                        right: 24px; 
                        width: 400px; 
                        max-width: calc(100vw - 48px); 
                        height: 600px; 
                        max-height: calc(100vh - 150px); 
                        border-radius: 20px; 
                        box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.8), 
                                    0 0 40px rgba(0, 212, 255, 0.1); 
                        z-index: 9999; 
                        display: flex; 
                        flex-direction: column; 
                        overflow: hidden;">
                
                <!-- Header with Gradient Border -->
                <div style="padding: 20px; 
                            border-bottom: 1px solid rgba(0, 212, 255, 0.2); 
                            background: linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(189, 0, 255, 0.05) 100%);
                            display: flex; 
                            align-items: center; 
                            justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 14px;">
                        <div style="width: 48px; 
                                    height: 48px; 
                                    border-radius: 50%; 
                                    background: linear-gradient(135deg, var(--sybtech-cyan), var(--sybtech-purple)); 
                                    display: flex; 
                                    align-items: center; 
                                    justify-content: center; 
                                    box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);">
                            <span style="color: white; font-weight: 900; font-size: 22px;">M</span>
                        </div>
                        <div>
                            <h3 id="sybtech-header-name"
                                style="color: var(--sybtech-text); 
                                       font-weight: 700; 
                                       font-size: 16px; 
                                       margin-bottom: 4px;">
                                محمد - مستشار المبيعات
                            </h3>
                            <p style="font-size: 13px; 
                                      color: var(--sybtech-cyan); 
                                      display: flex; 
                                      align-items: center; 
                                      gap: 6px;">
                                <span style="width: 8px; 
                                             height: 8px; 
                                             background: var(--sybtech-cyan); 
                                             border-radius: 50%; 
                                             display: inline-block; 
                                             box-shadow: 0 0 8px var(--sybtech-cyan);"></span>
                                <span id="sybtech-online-status">متاح الآن</span>
                            </p>
                        </div>
                    </div>
                    <button id="sybtech-close-chat" 
                            style="background: none; 
                                   border: none; 
                                   color: var(--sybtech-text-dim); 
                                   cursor: pointer; 
                                   padding: 8px; 
                                   transition: all 0.3s;
                                   border-radius: 8px;">
                        <svg style="width: 24px; height: 24px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <!-- Messages Container -->
                <div id="sybtech-chat-messages" 
                     class="sybtech-chat-messages" 
                     style="flex: 1; 
                            overflow-y: auto; 
                            padding: 20px; 
                            display: flex; 
                            flex-direction: column; 
                            gap: 14px;
                            background: var(--sybtech-navy);">
                    <!-- Messages will be added here dynamically -->
                </div>
                
                <!-- Typing Indicator -->
                <div id="sybtech-typing-indicator" 
                     class="sybtech-hidden" 
                     style="padding: 0 20px 12px 20px;">
                    <div style="display: flex; 
                                align-items: center; 
                                gap: 10px; 
                                color: var(--sybtech-cyan); 
                                font-size: 14px;">
                         <span id="sybtech-typing-text">محمد يكتب</span>
                        <div style="display: flex; gap: 4px;">
                            <span class="sybtech-typing-dot" 
                                  style="width: 8px; 
                                         height: 8px; 
                                         background: var(--sybtech-cyan); 
                                         border-radius: 50%; 
                                         display: inline-block;"></span>
                            <span class="sybtech-typing-dot" 
                                  style="width: 8px; 
                                         height: 8px; 
                                         background: var(--sybtech-cyan); 
                                         border-radius: 50%; 
                                         display: inline-block;"></span>
                            <span class="sybtech-typing-dot" 
                                  style="width: 8px; 
                                         height: 8px; 
                                         background: var(--sybtech-cyan); 
                                         border-radius: 50%; 
                                         display: inline-block;"></span>
                        </div>
                    </div>
                </div>
                
                <!-- Input Area -->
                <div style="padding: 20px; 
                            border-top: 1px solid rgba(0, 212, 255, 0.2);
                            background: rgba(5, 10, 24, 0.5);">
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <input id="sybtech-message-input" 
                               type="text" 
                               placeholder="اكتب رسالتك هنا..."
                               style="flex: 1; 
                                      background: rgba(15, 25, 50, 0.6); 
                                      border: 1.5px solid rgba(0, 212, 255, 0.2); 
                                      border-radius: 12px; 
                                      padding: 12px 18px; 
                                      color: white; 
                                      font-size: 14px; 
                                      outline: none; 
                                      transition: all 0.3s;"
                               dir="auto">
                        <button id="sybtech-send-button" 
                                class="sybtech-btn-gradient"
                                style="padding: 12px 28px; 
                                       border: none; 
                                       border-radius: 12px; 
                                       cursor: pointer; 
                                       font-size: 15px;
                                        white-space: nowrap;">
                            <span id="sybtech-send-text">إرسال</span>
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(widgetContainer);
    };

    // ============================================
    // UI Translations
    // ============================================
    const UI_TRANSLATIONS = {
        ar: {
            headerName: 'محمد - مستشار المبيعات',
            onlineStatus: 'متاح الآن',
            typingIndicator: 'محمد يكتب',
            sendButton: 'إرسال',
            inputPlaceholder: 'اكتب رسالتك هنا...'
        },
        en: {
            headerName: 'Mohamed - Sales Consultant',
            onlineStatus: 'Available now',
            typingIndicator: 'Mohamed is typing',
            sendButton: 'Send',
            inputPlaceholder: 'Type your message here...'
        }
    };

    // ============================================
    // Detect Page Language
    // ============================================
    const detectPageLanguage = () => {
        // Check <html lang="..."> attribute
        const htmlLang = document.documentElement.getAttribute('lang');
        if (htmlLang) {
            return htmlLang.toLowerCase().startsWith('ar') ? 'ar' : 'en';
        }

        // Fallback: check for global variable
        if (typeof window.pageLanguage !== 'undefined') {
            return window.pageLanguage.toLowerCase().startsWith('ar') ? 'ar' : 'en';
        }

        // Default to Arabic
        return 'ar';
    };

    // ============================================
    // Chat Logic Class
    // ============================================
    class SybTechChat {
        constructor() {
            this.conversationHistory = this.loadHistory();
            this.elements = {};
            this.pageLanguage = detectPageLanguage();
            this.uiText = UI_TRANSLATIONS[this.pageLanguage];
            this.init();
        }

        init() {
            // Get DOM elements
            this.elements = {
                chatButton: document.getElementById('sybtech-chat-button'),
                chatWindow: document.getElementById('sybtech-chat-window'),
                closeChat: document.getElementById('sybtech-close-chat'),
                chatMessages: document.getElementById('sybtech-chat-messages'),
                messageInput: document.getElementById('sybtech-message-input'),
                sendButton: document.getElementById('sybtech-send-button'),
                typingIndicator: document.getElementById('sybtech-typing-indicator')
            };

            // Attach event listeners
            this.elements.chatButton.addEventListener('click', () => this.openChat());
            this.elements.closeChat.addEventListener('click', () => this.closeChat());
            this.elements.sendButton.addEventListener('click', () => this.sendMessage());
            this.elements.messageInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.sendMessage();
            });

            // Input focus effect
            this.elements.messageInput.addEventListener('focus', () => {
                this.elements.messageInput.style.borderColor = 'var(--sybtech-cyan)';
                this.elements.messageInput.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.2)';
            });

            this.elements.messageInput.addEventListener('blur', () => {
                this.elements.messageInput.style.borderColor = 'rgba(0, 212, 255, 0.2)';
                this.elements.messageInput.style.boxShadow = 'none';
            });

            // Hover effects
            this.elements.chatButton.addEventListener('mouseenter', () => {
                this.elements.chatButton.style.transform = 'scale(1.1) rotate(5deg)';
            });
            this.elements.chatButton.addEventListener('mouseleave', () => {
                this.elements.chatButton.style.transform = 'scale(1) rotate(0deg)';
            });

            this.elements.closeChat.addEventListener('mouseenter', () => {
                this.elements.closeChat.style.color = 'var(--sybtech-text)';
                this.elements.closeChat.style.background = 'rgba(255, 255, 255, 0.1)';
            });
            this.elements.closeChat.addEventListener('mouseleave', () => {
                this.elements.closeChat.style.color = 'var(--sybtech-text-dim)';
                this.elements.closeChat.style.background = 'none';
            });

            // Update UI language
            this.updateUILanguage();

            // Watch for language changes from the website's language toggle
            this.observeLanguageChanges();
        }

        observeLanguageChanges() {
            // Create a MutationObserver to watch for changes in the HTML lang attribute
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
                        const newLang = detectPageLanguage();
                        if (newLang !== this.pageLanguage) {
                            this.pageLanguage = newLang;
                            this.uiText = UI_TRANSLATIONS[this.pageLanguage];
                            this.updateUILanguage();
                        }
                    }
                });
            });

            // Start observing the HTML element for attribute changes
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['lang']
            });
        }

        updateUILanguage() {
            // Update header name
            const headerName = document.getElementById('sybtech-header-name');
            if (headerName) {
                headerName.textContent = this.uiText.headerName;
            }

            // Update online status
            const onlineStatus = document.getElementById('sybtech-online-status');
            if (onlineStatus) {
                onlineStatus.textContent = this.uiText.onlineStatus;
            }

            // Update typing indicator text
            const typingText = document.getElementById('sybtech-typing-text');
            if (typingText) {
                typingText.textContent = this.uiText.typingIndicator;
            }

            // Update send button text
            const sendText = document.getElementById('sybtech-send-text');
            if (sendText) {
                sendText.textContent = this.uiText.sendButton;
            }

            // Update input placeholder
            if (this.elements.messageInput) {
                this.elements.messageInput.placeholder = this.uiText.inputPlaceholder;
            }
        }

        loadHistory() {
            try {
                const saved = sessionStorage.getItem(CONFIG.storageKey);
                if (saved) {
                    const history = JSON.parse(saved);
                    if (history[0]?.role !== 'system') {
                        return [{ role: 'system', content: SYSTEM_PROMPT }];
                    }
                    return history;
                }
            } catch (e) {
                console.error('Error loading chat history:', e);
            }
            return [{ role: 'system', content: SYSTEM_PROMPT }];
        }

        saveHistory() {
            try {
                sessionStorage.setItem(CONFIG.storageKey, JSON.stringify(this.conversationHistory));
            } catch (e) {
                console.error('Error saving chat history:', e);
            }
        }

        openChat() {
            this.elements.chatWindow.classList.remove('sybtech-hidden');
            this.elements.chatWindow.classList.add('sybtech-flex', 'sybtech-fade-in');

            // Restore messages from history
            this.restoreMessages();

            // Send initial greeting if chat is empty
            if (this.elements.chatMessages.children.length === 0) {
                this.sendInitialGreeting();
            }
        }

        closeChat() {
            this.elements.chatWindow.classList.add('sybtech-fade-out');
            setTimeout(() => {
                this.elements.chatWindow.classList.add('sybtech-hidden');
                this.elements.chatWindow.classList.remove('sybtech-flex', 'sybtech-fade-in', 'sybtech-fade-out');
            }, 300);
        }

        restoreMessages() {
            this.elements.chatMessages.innerHTML = '';

            this.conversationHistory.slice(1).forEach(msg => {
                if (msg.role === 'user' || msg.role === 'assistant') {
                    this.addMessageToUI(msg.content, msg.role);
                }
            });
        }

        async sendInitialGreeting() {
            this.showTypingIndicator();

            try {
                const response = await fetch(CONFIG.backendUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        messages: this.conversationHistory
                    })
                });

                if (!response.ok) {
                    throw new Error(`Backend Error: ${response.status}`);
                }

                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error);
                }

                const assistantMessage = data.message;

                this.conversationHistory.push({
                    role: 'assistant',
                    content: assistantMessage
                });
                this.saveHistory();

                this.hideTypingIndicator();
                this.addMessageToUI(assistantMessage, 'assistant');

            } catch (error) {
                this.hideTypingIndicator();
                console.error('Error:', error);
                this.addMessageToUI('عذراً، حصل خطأ في الاتصال. جرب تاني من فضلك.', 'assistant');
            }
        }

        async sendMessage() {
            const userMessage = this.elements.messageInput.value.trim();

            if (!userMessage) return;

            this.addMessageToUI(userMessage, 'user');

            this.conversationHistory.push({
                role: 'user',
                content: userMessage
            });
            this.saveHistory();

            this.elements.messageInput.value = '';

            this.showTypingIndicator();

            try {
                const response = await fetch(CONFIG.backendUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        messages: this.conversationHistory
                    })
                });

                if (!response.ok) {
                    throw new Error(`Backend Error: ${response.status}`);
                }

                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error);
                }

                const assistantMessage = data.message;

                // Lead capture is now handled server-side
                // The backend strips the [LEAD_CAPTURED] tag automatically

                this.conversationHistory.push({
                    role: 'assistant',
                    content: assistantMessage
                });
                this.saveHistory();

                this.hideTypingIndicator();
                this.addMessageToUI(assistantMessage, 'assistant');

            } catch (error) {
                this.hideTypingIndicator();
                console.error('Error:', error);
                this.addMessageToUI('عذراً، حصل خطأ في الاتصال. جرب تاني من فضلك.', 'assistant');
            }
        }

        addMessageToUI(message, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'sybtech-message-bubble';
            messageDiv.style.display = 'flex';
            messageDiv.style.justifyContent = sender === 'user' ? 'flex-end' : 'flex-start';

            const bubble = document.createElement('div');
            bubble.style.maxWidth = '80%';
            bubble.style.padding = '12px 18px';
            bubble.style.borderRadius = '16px';
            bubble.style.fontSize = '14.5px';
            bubble.style.lineHeight = '1.6';
            bubble.style.wordWrap = 'break-word';
            bubble.style.whiteSpace = 'pre-wrap';

            if (sender === 'user') {
                bubble.style.background = 'linear-gradient(135deg, var(--sybtech-cyan), var(--sybtech-purple))';
                bubble.style.color = 'white';
                bubble.style.fontWeight = '600';
                bubble.style.boxShadow = '0 4px 15px rgba(0, 212, 255, 0.2)';
            } else {
                bubble.style.background = 'rgba(15, 25, 50, 0.6)';
                bubble.style.color = 'var(--sybtech-text)';
                bubble.style.border = '1px solid rgba(0, 212, 255, 0.15)';
            }

            bubble.textContent = message;
            messageDiv.appendChild(bubble);
            this.elements.chatMessages.appendChild(messageDiv);

            this.elements.chatMessages.scrollTop = this.elements.chatMessages.scrollHeight;
        }

        showTypingIndicator() {
            this.elements.typingIndicator.classList.remove('sybtech-hidden');
        }

        hideTypingIndicator() {
            this.elements.typingIndicator.classList.add('sybtech-hidden');
        }

        // Discord integration moved to backend for security
        // Lead capture is automatically handled server-side
    }

    // ============================================
    // Initialize Widget on Page Load
    // ============================================
    const initWidget = () => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                injectStyles();
                injectHTML();
                new SybTechChat();
            });
        } else {
            injectStyles();
            injectHTML();
            new SybTechChat();
        }
    };

    initWidget();

})();
