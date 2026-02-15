// ========================================
// PWA APP LOGIC
// ========================================

// App State
const appState = {
    currentTab: 'home',
    installPrompt: null
};

// ========================================
// SERVICE WORKER REGISTRATION
// ========================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/pwa/sw.js')
            .then((registration) => {
                console.log('✅ Service Worker registered:', registration.scope);
            })
            .catch((error) => {
                console.error('❌ Service Worker registration failed:', error);
            });
    });
}

// ========================================
// INSTALL PROMPT (A2HS)
// ========================================

let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) installBtn.style.display = 'flex';
});

if (installBtn) {
    installBtn.addEventListener('click', async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        deferredPrompt = null;
        installBtn.style.display = 'none';
    });
}

// ========================================
// TAB NAVIGATION
// ========================================

const navItems = document.querySelectorAll('.nav-item');
const tabContents = document.querySelectorAll('.tab-content');
const headerTitle = document.getElementById('headerTitle');

const tabTitles = {
    home: 'Home',
    chat: 'AI Assistant',
    profile: 'Profile',
    settings: 'Settings'
};

function switchTab(tabName) {
    appState.currentTab = tabName;

    navItems.forEach((item) => {
        item.classList.toggle('active', item.dataset.tab === tabName);
    });

    tabContents.forEach((content) => {
        content.classList.toggle('active', content.id === `${tabName}Tab`);
    });

    if (headerTitle) headerTitle.textContent = tabTitles[tabName] || 'SybTech';

    const mainContent = document.getElementById('mainContent');
    if (mainContent) mainContent.scrollTop = 0;

    if ('vibrate' in navigator) navigator.vibrate(10);
}

navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab(item.dataset.tab);
    });
});

// ========================================
// INITIALIZE APP
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    switchTab('home');

    const isPWA = window.matchMedia('(display-mode: standalone)').matches;
    if (isPWA && installBtn) installBtn.style.display = 'none';
});
