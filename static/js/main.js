// ==========================================
// BILINGUAL SUPPORT SYSTEM (AR/EN)
// ==========================================

// Translation data for all pages
const translations = {
    ar: {
        // Navbar
        nav_home: 'الرئيسية',
        nav_services: 'الخدمات',
        nav_about: 'من نحن',
        nav_contact: 'اتصل بنا',

        // Index page
        hero_title: 'حول خيالك إلى',
        hero_highlight: 'واقع رقمي',
        hero_desc: 'نحن لا نبني مجرد مواقع، نحن نبني أنظمة ذكية تدير أعمالك وتزيد أرباحك باستخدام أحدث تقنيات الذكاء الاصطناعي.',
        hero_cta: 'ابدأ مشروعك الآن',

        // About page
        about_title: 'الـ DNA الخاص بنا',
        about_desc: 'نحن لسنا مجرد وكالة برمجيات تقليدية. <strong>SybTech</strong> هي الجسر الذي يربط بين خيالك والواقع الرقمي.<br><br>انطلقنا من دبي بهدف واحد: القضاء على "الروتين" باستخدام الذكاء الاصطناعي وبناء أنظمة لا تتعطل.',
        stat1_value: '100%',
        stat1_label: 'Uptime',
        stat2_value: '50+',
        stat2_label: 'مشروع ناجح',
        stat3_value: '24/7',
        stat3_label: 'دعم فني',

        // Services page
        services_title: 'خدماتنا التقنية',
        services_subtitle: 'حلول متكاملة لتنمية أعمالك',
        service1_title: 'تطوير المواقع الإلكترونية',
        service1_desc: 'مواقع احترافية عالية الأداء مصممة خصيصاً لعملك. نبني تجارب رقمية سريعة، آمنة، ومتجاوبة مع جميع الأجهزة باستخدام أحدث التقنيات.',
        service2_title: 'باقة الويب والتطبيق',
        service2_desc: 'حزمة متكاملة تشمل موقع ويب احترافي + تطبيق موبايل أصلي (Android & iOS). حل شامل لتواجد رقمي قوي يربط عملاءك بخدماتك في كل مكان.',
        service3_title: 'هندسة الأنظمة الكاملة',
        service3_desc: 'أنظمة إدارية داخلية متكاملة (ERP, CRM) مصممة خصيصاً لمؤسستك. نبني حلول ذكية لإدارة الموارد، العملاء، والعمليات بكفاءة عالية.',
        service4_title: 'الأتمتة والذكاء الاصطناعي',
        service4_desc: 'أتمتة ذكية للمهام المتكررة وسير العمل. نوفر لك حلول AI لتقليل التكاليف، زيادة الإنتاجية، وتحويل البيانات إلى قرارات استراتيجية.',
        service_btn: 'اطلب الخدمة',

        // Contact page
        contact_title: 'جاهز للتحول الرقمي؟',
        contact_subtitle: 'املأ البيانات وسيقوم فريق SybTech بالرد عليك بتحليل مبدئي لمشروعك خلال 24 ساعة.',
        contact_location_title: 'المقر الرئيسي',
        contact_location_text: 'دبي، الإمارات العربية المتحدة',
        contact_email_title: 'البريد الإلكتروني',
        contact_email_text: 'info@sybtech.ae',
        contact_whatsapp_title: 'تواصل مباشر',
        contact_whatsapp_text: 'تواصل عبر واتساب فوراً ←',
        contact_form_title: 'Initiate Contact Protocol //',
        form_name: 'الاسم بالكامل',
        form_phone: 'رقم الهاتف',
        form_service: 'نوع الخدمة المطلوبة',
        form_service_opt1: 'تطوير المواقع الإلكترونية',
        form_service_opt2: 'باقة الويب والتطبيق',
        form_service_opt3: 'هندسة الأنظمة الكاملة (ERP/CRM)',
        form_service_opt4: 'الأتمتة والذكاء الاصطناعي',
        form_submit: 'إرسال البيانات (Transmit)',
        form_success: 'تم إرسال طلبك بنجاح! ✅',
        form_error: 'حدث خطأ أثناء إرسال الطلب. الرجاء المحاولة مرة أخرى.',

        // Footer
        footer_desc: 'نحن نصنع المستقبل الرقمي. وكالة برمجيات متخصصة في الذكاء الاصطناعي وحلول الويب المتقدمة.',
        footer_links_title: 'روابط سريعة',
        footer_social_title: 'تابعنا على',
        footer_copyright: '© 2026 SybTech. All Systems Operational 🟢'
    },
    en: {
        // Navbar
        nav_home: 'Home',
        nav_services: 'Services',
        nav_about: 'About',
        nav_contact: 'Contact',

        // Index page
        hero_title: 'Transform Your Vision into',
        hero_highlight: 'Digital Reality',
        hero_desc: 'We don\'t just build websites, we build intelligent systems that manage your business and increase your profits using the latest AI technologies.',
        hero_cta: 'Start Your Project Now',

        // About page
        about_title: 'Our DNA',
        about_desc: 'We are not just a traditional software agency. <strong>SybTech</strong> is the bridge that connects your imagination to digital reality.<br><br>We launched from Dubai with one goal: eliminating "routine" using artificial intelligence and building systems that never fail.',
        stat1_value: '100%',
        stat1_label: 'Uptime',
        stat2_value: '50+',
        stat2_label: 'Successful Projects',
        stat3_value: '24/7',
        stat3_label: 'Technical Support',

        // Services page
        services_title: 'Our Technical Services',
        services_subtitle: 'Comprehensive solutions to grow your business',
        service1_title: 'Website Development',
        service1_desc: 'Professional high-performance websites designed specifically for your business. We build fast, secure, and responsive digital experiences using the latest technologies.',
        service2_title: 'Web & Mobile App Bundle',
        service2_desc: 'Complete package including professional website + native mobile application (Android & iOS). Comprehensive solution for a strong digital presence connecting your customers to your services everywhere.',
        service3_title: 'Full System Architecture',
        service3_desc: 'Complete internal management systems (ERP, CRM) designed specifically for your organization. We build smart solutions for managing resources, customers, and operations with high efficiency.',
        service4_title: 'Automation & AI',
        service4_desc: 'Smart automation for repetitive tasks and workflows. We provide AI solutions to reduce costs, increase productivity, and transform data into strategic decisions.',
        service_btn: 'Request Service',

        // Contact page
        contact_title: 'Ready for Digital Transformation?',
        contact_subtitle: 'Fill in the details and the SybTech team will respond with a preliminary analysis of your project within 24 hours.',
        contact_location_title: 'Headquarters',
        contact_location_text: 'Dubai, United Arab Emirates',
        contact_email_title: 'Email',
        contact_email_text: 'info@sybtech.ae',
        contact_whatsapp_title: 'Direct Contact',
        contact_whatsapp_text: 'Contact via WhatsApp Now →',
        contact_form_title: 'Initiate Contact Protocol //',
        form_name: 'Full Name',
        form_phone: 'Phone Number',
        form_service: 'Service Type Required',
        form_service_opt1: 'Website Development',
        form_service_opt2: 'Web & Mobile App Bundle',
        form_service_opt3: 'Full System Architecture (ERP/CRM)',
        form_service_opt4: 'Automation & AI',
        form_submit: 'Send Data (Transmit)',
        form_success: 'Request Sent Successfully! ✅',
        form_error: 'An error occurred while sending the request. Please try again.',

        // Footer
        footer_desc: 'We create the digital future. A software agency specialized in artificial intelligence and advanced web solutions.',
        footer_links_title: 'Quick Links',
        footer_social_title: 'Follow Us',
        footer_copyright: '© 2026 SybTech. All Systems Operational 🟢'
    }
};

// Current language (default to Arabic)
let currentLang = localStorage.getItem('sybtech_lang') || 'ar';

// Initialize language on page load
function initLanguage() {
    applyLanguage(currentLang);
    updateLanguageToggle();
}

// Apply language to all elements
function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('sybtech_lang', lang);

    // Update HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Update select options
    document.querySelectorAll('[data-i18n-value]').forEach(element => {
        const key = element.getAttribute('data-i18n-value');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Toggle language
function toggleLanguage() {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage(newLang);
    updateLanguageToggle();
}

// Update language toggle button state
function updateLanguageToggle() {
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
        toggleBtn.textContent = currentLang === 'ar' ? 'EN' : 'عربي';
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // Initialize language
    initLanguage();

    // Language toggle button handler
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }

    // 1. Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // 2. Scroll reveal animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.service-card, .info-box, .contact-form').forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // 3. Discord Webhook Integration for Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;

            const webhookURL = 'https://discord.com/api/webhooks/1469691760627159060/FENuip5jSBTIspNBNgqXErcNhC3cn5Z7473b1BVPMf8DEqIKDITbsnKFuR5vC214zvig';

            const payload = {
                embeds: [{
                    title: '🚀 طلب جديد من موقع SybTech',
                    color: 0x00f3ff,
                    fields: [
                        {
                            name: '👤 الاسم',
                            value: name,
                            inline: true
                        },
                        {
                            name: '📱 رقم الهاتف',
                            value: phone,
                            inline: true
                        },
                        {
                            name: '🛠️ الخدمة المطلوبة',
                            value: service,
                            inline: false
                        }
                    ],
                    timestamp: new Date().toISOString(),
                    footer: {
                        text: 'SybTech Contact Form'
                    }
                }]
            };

            try {
                const response = await fetch(webhookURL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    // Show success alert in current language
                    alert(translations[currentLang].form_success);
                    contactForm.reset();
                } else {
                    alert(translations[currentLang].form_error);
                }
            } catch (error) {
                console.error('Error sending to Discord:', error);
                alert(translations[currentLang].form_error);
            }
        });
    }

});