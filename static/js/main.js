// ==========================================
// BILINGUAL SUPPORT SYSTEM (AR/EN)
// ==========================================

// Translation data for all pages
const translations = {
    ar: {
        // Navbar
        nav_home: 'الرئيسية',
        nav_services: 'الخدمات',
        nav_works: 'أعمالنا',
        nav_about: 'من نحن',
        nav_contact: 'اتصل بنا',

        // Index page
        hero_title: 'حول خيالك إلى',
        hero_highlight: 'واقع رقمي',
        hero_desc: 'نحن لا نبني مجرد مواقع، نحن نبني أنظمة ذكية تدير أعمالك وتزيد أرباحك باستخدام أحدث تقنيات الذكاء الاصطناعي.',
        hero_cta: 'ابدأ مشروعك الآن',

        // App Showcase (Index)
        app_badge: '📱 تطبيقنا الذكي',
        app_showcase_title: 'جرّب تجربة العميل <br><span style="background:linear-gradient(135deg,#00e1ff,#bc13fe);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">بنفسك الآن</span>',
        app_showcase_desc: 'تطبيق ويب متكامل يعرض خدماتنا ويتيح لك التحدث مع <strong style="color:#00e1ff">محمد</strong> — مستشار المبيعات الذكي — مباشرةً وفي الحال.',
        app_feature1: 'محمد AI — مستشار مبيعات حقيقي يرد فوراً',
        app_feature2: 'عرض كامل لخدماتنا وأسعارنا',
        app_feature3: 'تصميم Mobile-First احترافي',
        app_feature4: 'تواصل مباشر عبر واتساب ولينكدإن',
        app_launch_btn: '<i class="fa-solid fa-mobile-screen-button"></i> افتح التطبيق كاملاً ←',

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
        contact_email_text: 'info@syb-tech.com',
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

        // Works page
        works_label: '// البورتفوليو',
        works_title_ar: 'أعمالنا &',
        works_title_en: 'أعمالنا &',
        works_title_highlight: 'مشاريعنا',
        works_desc: 'مشاريع حقيقية بُنيت بشغف واحترافية. كل مشروع هو قصة نجاح مختلفة.',
        works_stat1: 'مواقع منجزة',
        works_stat2: 'رضا العملاء',
        works_stat3: 'جميعها شغالة',
        proj1_title: 'Cyber Ops Platform',
        proj1_desc: 'منصة أمن سيبراني احترافية بتعرض خدمات الأمن الرقمي والحلول التقنية المتخصصة. تصميم داكن يعكس طبيعة المجال مع واجهة مستخدم متقدمة.',
        proj2_title: 'Zero Lag Commerce',
        proj2_desc: 'متجر إلكتروني فائق السرعة مبني بأحدث تقنيات Next.js وFramer Motion. يركز على تجربة مستخدم لا تُضاهى مع Core Web Vitals مثالية 100%.',
        proj3_title: 'Real Estate App',
        proj3_desc: 'تطبيق عقاري متكامل يتيح البحث والتصفية والحجز بسلاسة تامة. تصميم عصري يناسب سوق العقارات مع واجهة ثنائية اللغة وخرائط تفاعلية.',
        proj4_title: 'الوسام للترجمة القانونية',
        proj4_desc: 'موقع لمكتب ترجمة قانونية متخصص في الإمارات. يتضمن حاسبة أسعار تفاعلية، نظام تتبع طلبات، وتكامل واتساب. مبني كـ PWA كامل.',
        visit_btn: 'زيارة الموقع',
        works_cta_title: 'مشروعك القادم هنا 🚀',
        works_cta_desc: 'عايز موقع زي ده أو أحسن؟ تواصل معانا وهنحوّل فكرتك لواقع رقمي.',
        // WhatsApp Bot card
        proj5_title: 'SybTech WhatsApp AI Sales Bot',
        proj5_desc: 'بوت واتساب بيشتغل بالذكاء الاصطناعي كـ Sales Agent باسم “Syb-Agent”. بيرد على العملاء بالعربي، بيتعرف على احتياجاتهم، وبيحاول يعمل Appointment لعرض Demo. بيشتغل 24/7 على السيرفر تلقائياً.',
        bot_running: 'شغال',
        bot_feat1: 'ردود فورية بالذكاء الاصطناعي GPT-4o',
        bot_feat2: 'حجز ميتنج أوتوماتيكي على Google Calendar',
        bot_feat3: 'إشعارات Discord فورية لكل Lead جديد',
        bot_feat4: 'شغّال 24/7 بدون تدخل بشري',
        bot_feat5: 'Session Memory — بيتذكر سياق المحادثة',
        bot_meeting_btn: 'احجز ميتنج واعرف أكتر',
        // HR Bot
        proj6_title: 'AI HR Screening Bot',
        proj6_desc: 'بوت واتساب ذكي بيعمل كـ HR Specialist أوتوماتيكي. بيتواصل مع المتقدمين، بيجمع بياناتهم، وبيحكم عليهم بالذكاء الاصطناعي — في جميع التخصصات بدون أي تدخل بشري.',
        hr_feat1: 'بيسأل المتقدم عن تخصصه، خبرته، ومهاراته',
        hr_feat2: 'يقيّم الـ CV ويحكم: مناسب / مش مناسب',
        hr_feat3: 'يحجز إنترفيو أوتوماتيكي على Google Calendar',
        hr_feat4: 'يشتغل مع جميع التخصصات بأسئلة ديناميكية',
        hr_feat5: 'يبعت تقرير فوري للـ HR Manager على Discord',
        // Marketing Bot
        proj7_title: 'AI Marketing Automation Bot',
        proj7_desc: 'منظومة تسويق أوتوماتيكية شاملة. بتبعت كامبينز واتساب وإيميل، بتتابع الـ Leads، وبتبعت أوفرز مخصصة — كل ده بدون ما تحرك إصبعك.',
        mkt_feat1: 'كامبينز واتساب وإيميل أوتوماتيكية مجدولة',
        mkt_feat2: 'متابعة Leads ذكية وإعادة استهداف تلقائي',
        mkt_feat3: 'أوفرز شخصية مخصصة لكل عميل بالذكاء الاصطناعي',
        mkt_feat4: 'نشر محتوى أوتوماتيكي على السوشيال ميديا',
        mkt_feat5: 'تقارير أداء تفصيلية لكل كامبين',
        // Automobile (Project 9)
        proj9_title_ar: 'تطبيق معارض السيارات – Automobile',
        proj9_title_en: 'Automobile – Car Showrooms App',
        proj9_desc_ar: 'تطبيق موبايل ويب لمعارض ووكالات السيارات: جرد السيارات، حجز تجربة قيادة ٤٨ ساعة، مقارنة ومفضلة، بوت واتساب للرد والحجز، ولوحة CRM موحدة مع SybTech لجمع الليدرز والحجوزات.',
        proj9_desc_en: 'Mobile web app for car showrooms & dealers: inventory, 48h test-drive booking, compare & favorites, WhatsApp bot for replies and bookings, and unified SybTech CRM for leads and reservations.',
        proj9_f1_ar: 'جرد سيارات مع بحث وتصفية حسب الماركة والسعر',
        proj9_f1_en: 'Car inventory with search & filter by brand and price',
        proj9_f2_ar: 'حجز اسم العميل على السيارة ٤٨ ساعة مع ربط واتساب',
        proj9_f2_en: '48h reservation with WhatsApp confirmation',
        proj9_f3_ar: 'مقارنة ومفضلة وتجربة قيادة – واجهة عربي/إنجليزي',
        proj9_f3_en: 'Compare, favorites & test drive – bilingual UI',
        proj9_f4_ar: 'ليدرز وحجوزات تندمج في CRM SybTech الموحد',
        proj9_f4_en: 'Leads & bookings flow into unified SybTech CRM',
        proj9_btn_ar: 'فتح التطبيق',
        proj9_btn_en: 'Open App',

        // Performance & Optimization Section
        perf_badge: '⚡ أداء بلا حدود',
        perf_title: 'عناصر 3D <span class="perf-highlight">بدون أي بطء</span>',
        perf_subtitle: 'وجود عناصر 3D لا يعني إن الموقع هيكون تقيل أو بطيء — الفكرة كلها في طريقة التنفيذ. إحنا معتمدين على تقنيات Optimization متقدمة.',
        perf_card1_title: 'Image Sequence',
        perf_card1_desc: 'استخدام Image Sequence بدل الفيديو في بعض الأجزاء لتقليل الحجم وزيادة السرعة.',
        perf_card2_title: 'WebP & Web Formats',
        perf_card2_desc: 'صيغ خفيفة زي WebP للعناصر الثقيلة — نفس الجودة بحجم أقل بكتير.',
        perf_card3_title: 'Lazy Loading',
        perf_card3_desc: 'تحميل العناصر الثقيلة بس لما المستخدم يوصلها — مفيش تحميل زائد.',
        perf_card4_title: 'Progressive Loading',
        perf_card4_desc: 'تحميل تدريجي للمحتوى — الصفحة بتظهر فوراً والباقي بيكمّل في الخلفية.',
        perf_card5_title: 'High-Performance Servers',
        perf_card5_desc: 'الموقع مستضاف على سيرفرات سريعة ومهيأة للأداء العالي والاستجابة الفورية.',
        perf_card6_title: '3D Compression',
        perf_card6_desc: 'كل عناصر الـ 3D مضغوطة ومحسنة قبل الاستخدام — أقل حجم وأفضل أداء.',
        perf_meter_label: 'مستوى الأداء',

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
        nav_works: 'Our Works',
        nav_about: 'About',
        nav_contact: 'Contact',

        // Index page
        hero_title: 'Transform Your Vision into',
        hero_highlight: 'Digital Reality',
        hero_desc: 'We don\'t just build websites, we build intelligent systems that manage your business and increase your profits using the latest AI technologies.',
        hero_cta: 'Start Your Project Now',

        // App Showcase (Index)
        app_badge: '📱 Our Smart App',
        app_showcase_title: 'Try the Customer Experience <br><span style="background:linear-gradient(135deg,#00e1ff,#bc13fe);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Yourself Now</span>',
        app_showcase_desc: 'An integrated web app that showcases our services and lets you chat with <strong style="color:#00e1ff">Mohammed</strong> — the AI sales consultant — directly and instantly.',
        app_feature1: 'Mohammed AI — a real sales consultant who responds instantly',
        app_feature2: 'Full display of our services and pricing',
        app_feature3: 'Professional Mobile-First design',
        app_feature4: 'Direct contact via WhatsApp and LinkedIn',
        app_launch_btn: '<i class="fa-solid fa-mobile-screen-button"></i> Open Full App →',

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
        contact_email_text: 'info@syb-tech.com',
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

        // Works page
        works_label: '// Portfolio',
        works_title_ar: 'Our Works &',
        works_title_en: 'Our Works &',
        works_title_highlight: 'Projects',
        works_desc: 'Real projects built with passion and professionalism. Every project is a unique success story.',
        works_stat1: 'Websites Delivered',
        works_stat2: 'Client Satisfaction',
        works_stat3: 'All Live & Running',
        proj1_title: 'Cyber Ops Platform',
        proj1_desc: 'A professional cybersecurity platform showcasing digital security services and specialized technical solutions. Dark design reflecting the industry nature with an advanced user interface.',
        proj2_title: 'Zero Lag Commerce',
        proj2_desc: 'A blazing-fast e-commerce store built with the latest Next.js and Framer Motion. Focused on an unmatched user experience with perfect 100% Core Web Vitals.',
        proj3_title: 'Real Estate App',
        proj3_desc: 'A complete real estate app enabling smooth search, filtering and booking. Modern design suited for the property market with a bilingual interface and interactive maps.',
        proj4_title: 'Al Wissam Legal Translation',
        proj4_desc: 'Website for a legal translation office specializing in UAE services. Features an interactive price calculator, order tracking system, and WhatsApp integration. Built as a full PWA.',
        visit_btn: 'Visit Website',
        works_cta_title: 'Your Next Project Goes Here 🚀',
        works_cta_desc: 'Want a website like this or better? Contact us and we\'ll turn your idea into digital reality.',
        // WhatsApp Bot card
        proj5_title: 'SybTech WhatsApp AI Sales Bot',
        proj5_desc: 'A WhatsApp bot powered by AI acting as a Sales Agent named "Syb-Agent". It replies to clients in Arabic, identifies their needs, and books Demo meeting appointments automatically. Runs 24/7 on the server.',
        bot_running: 'Running',
        bot_feat1: 'Instant AI replies powered by GPT-4o',
        bot_feat2: 'Auto meeting booking on Google Calendar',
        bot_feat3: 'Instant Discord alerts for every new Lead',
        bot_feat4: 'Runs 24/7 with zero human intervention',
        bot_feat5: 'Session Memory — remembers conversation context',
        bot_meeting_btn: 'Book a Meeting & Learn More',
        // HR Bot
        proj6_title: 'AI HR Screening Bot',
        proj6_desc: 'A smart WhatsApp bot that acts as an automated HR Specialist. It contacts applicants, collects their details, and evaluates them using AI — across all specializations, with zero human intervention.',
        hr_feat1: 'Asks applicant about their specialization, experience & skills',
        hr_feat2: 'Evaluates the CV and decides: Suitable / Not Suitable',
        hr_feat3: 'Auto-books interview appointments on Google Calendar',
        hr_feat4: 'Works across all job specializations with dynamic questions',
        hr_feat5: 'Sends instant report to HR Manager on Discord',
        // Marketing Bot
        proj7_title: 'AI Marketing Automation Bot',
        proj7_desc: 'A complete marketing automation system. It sends WhatsApp & email campaigns, follows up Leads, and delivers personalized offers — all without you lifting a finger.',
        mkt_feat1: 'Scheduled automatic WhatsApp & email campaigns',
        mkt_feat2: 'Smart Lead follow-up with automatic retargeting',
        mkt_feat3: 'AI-personalized offers tailored to each client',
        mkt_feat4: 'Automatic content posting on social media',
        mkt_feat5: 'Detailed performance reports for every campaign',
        // Automobile (Project 9)
        proj9_title_ar: 'تطبيق معارض السيارات – Automobile',
        proj9_title_en: 'Automobile – Car Showrooms App',
        proj9_desc_ar: 'تطبيق موبايل ويب لمعارض ووكالات السيارات: جرد السيارات، حجز تجربة قيادة ٤٨ ساعة، مقارنة ومفضلة، بوت واتساب للرد والحجز، ولوحة CRM موحدة مع SybTech لجمع الليدرز والحجوزات.',
        proj9_desc_en: 'Mobile web app for car showrooms and dealers: inventory, 48h test-drive booking, compare and favorites, WhatsApp bot for replies and bookings, and unified SybTech CRM for leads and reservations.',
        proj9_f1_ar: 'جرد سيارات مع بحث وتصفية حسب الماركة والسعر',
        proj9_f1_en: 'Car inventory with search and filter by brand and price',
        proj9_f2_ar: 'حجز اسم العميل على السيارة ٤٨ ساعة مع ربط واتساب',
        proj9_f2_en: '48h reservation with WhatsApp confirmation',
        proj9_f3_ar: 'مقارنة ومفضلة وتجربة قيادة – واجهة عربي/إنجليزي',
        proj9_f3_en: 'Compare, favorites and test drive – bilingual UI',
        proj9_f4_ar: 'ليدرز وحجوزات تندمج في CRM SybTech الموحد',
        proj9_f4_en: 'Leads and bookings flow into unified SybTech CRM',
        proj9_btn_ar: 'فتح التطبيق',
        proj9_btn_en: 'Open App',

        // Performance & Optimization Section
        perf_badge: '⚡ Unlimited Performance',
        perf_title: '3D Elements <span class="perf-highlight">Without Any Lag</span>',
        perf_subtitle: 'Having 3D elements doesn\'t mean the site will be heavy or slow — it\'s all about the implementation. We rely on advanced Optimization techniques.',
        perf_card1_title: 'Image Sequence',
        perf_card1_desc: 'Using Image Sequences instead of video in some sections to reduce size and boost speed.',
        perf_card2_title: 'WebP & Web Formats',
        perf_card2_desc: 'Lightweight formats like WebP for heavy elements — same quality at a much smaller size.',
        perf_card3_title: 'Lazy Loading',
        perf_card3_desc: 'Heavy elements load only when the user scrolls to them — no unnecessary loading.',
        perf_card4_title: 'Progressive Loading',
        perf_card4_desc: 'Gradual content loading — the page appears instantly while the rest loads in the background.',
        perf_card5_title: 'High-Performance Servers',
        perf_card5_desc: 'The site is hosted on fast servers optimized for high performance and instant response.',
        perf_card6_title: '3D Compression',
        perf_card6_desc: 'All 3D elements are compressed and optimized before use — minimal size, maximum performance.',
        perf_meter_label: 'Performance Level',

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

    // Update body class for CSS-based hero section visibility
    document.body.classList.remove('lang-ar', 'lang-en');
    document.body.classList.add(`lang-${lang}`);

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

    // 3. Contact Form Integration - SECURE BACKEND SUBMISSION
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;

            // ============================================
            // SECURITY: Send to backend API instead of direct Discord webhook
            // This prevents webhook URL exposure and adds rate limiting
            // ============================================
            const backendURL = '/api/contact';

            const payload = {
                name: name,
                phone: phone,
                service: service
            };

            try {
                const response = await fetch(backendURL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                const data = await response.json();

                if (response.ok && data.success) {
                    // Show success message in current language
                    alert(translations[currentLang].form_success);
                    contactForm.reset();
                } else {
                    alert(data.error || translations[currentLang].form_error);
                }
            } catch (error) {
                console.error('Error sending contact form:', error);
                alert(translations[currentLang].form_error);
            }
        });
    }

});

// ============================================
// MOBILE BOTTOM NAV: AI CHAT BUTTON HANDLER
// ============================================
const mobileChatBtn = document.getElementById('mobileChatBtn');
if (mobileChatBtn) {
    mobileChatBtn.addEventListener('click', () => {
        // Trigger the existing SybTech chat widget
        // The chat widget button is injected by sybtech-chat.js
        const chatOpenBtn = document.getElementById('sybtechChatBtn');
        if (chatOpenBtn) {
            chatOpenBtn.click();
        }
    });
}

// ============================================
// PWA SERVICE WORKER REGISTRATION
// ============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then((registration) => {
                console.log('✅ PWA Service Worker registered:', registration.scope);

                // Check for updates every hour
                setInterval(() => {
                    registration.update();
                }, 3600000);
            })
            .catch((error) => {
                console.error('❌ SW registration failed:', error);
            });
    });
}

// ============================================
// PWA INSTALL PROMPT (ADD TO HOME SCREEN)
// ============================================
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the default mini-infobar
    e.preventDefault();

    // Store the event for later use
    deferredPrompt = e;

    console.log('💾 PWA install prompt available');

    // You can show a custom install button here
    // showInstallButton();
});

// Track successful installation
window.addEventListener('appinstalled', (e) => {
    console.log('🎉 PWA installed successfully!');
    deferredPrompt = null;
});

// Check if running as installed PWA
if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('📱 Running as installed PWA');
}
