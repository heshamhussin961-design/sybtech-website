// ============================================
// SybTech PWA Service Worker
// Offline Support & Asset Caching
// ============================================

const CACHE_NAME = 'sybtech-v1';
const RUNTIME_CACHE = 'sybtech-runtime-v1';

// Assets to precache on install
const PRECACHE_ASSETS = [
    '/',
    '/index.html',
    '/about.html',
    '/services.html',
    '/contact.html',
    '/static/css/style.css',
    '/static/js/main.js',
    '/static/js/sybtech-chat.js',
    '/static/images/favicon.png',
    '/manifest.json'
];

// Install Event - Cache core assets
self.addEventListener('install', (event) => {
    console.log('[SW] Installing SybTech Service Worker...');

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Precaching app shell');
                return cache.addAll(PRECACHE_ASSETS);
            })
            .then(() => self.skipWaiting())
            .catch((error) => {
                console.error('[SW] Precache failed:', error);
            })
    );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating Service Worker...');

    const currentCaches = [CACHE_NAME, RUNTIME_CACHE];

    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName));
            })
            .then((cachesToDelete) => {
                return Promise.all(
                    cachesToDelete.map((cacheToDelete) => {
                        console.log('[SW] Deleting old cache:', cacheToDelete);
                        return caches.delete(cacheToDelete);
                    })
                );
            })
            .then(() => self.clients.claim())
    );
});

// Fetch Event - Network First, fallback to Cache
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip cross-origin requests
    if (url.origin !== location.origin) {
        return;
    }

    // Skip API requests (they need fresh data)
    if (url.pathname.startsWith('/api/')) {
        event.respondWith(
            fetch(request).catch(() => {
                return new Response(JSON.stringify({
                    error: 'Offline - API unavailable'
                }), {
                    headers: { 'Content-Type': 'application/json' }
                });
            })
        );
        return;
    }

    // For all other requests: Network First strategy
    event.respondWith(
        fetch(request)
            .then((response) => {
                // Clone the response before caching
                if (response && response.status === 200) {
                    const responseToCache = response.clone();
                    caches.open(RUNTIME_CACHE).then((cache) => {
                        cache.put(request, responseToCache);
                    });
                }
                return response;
            })
            .catch(() => {
                // Network failed, try cache
                return caches.match(request).then((cachedResponse) => {
                    if (cachedResponse) {
                        console.log('[SW] Serving from cache:', request.url);
                        return cachedResponse;
                    }

                    // If it's an HTML page and not in cache, return offline page
                    if (request.headers.get('accept').includes('text/html')) {
                        return caches.match('/index.html');
                    }

                    // Return a generic offline response
                    return new Response('Offline - Resource unavailable', {
                        status: 503,
                        statusText: 'Service Unavailable',
                        headers: new Headers({
                            'Content-Type': 'text/plain'
                        })
                    });
                });
            })
    );
});

// Background Sync (for future feature)
self.addEventListener('sync', (event) => {
    console.log('[SW] Background sync:', event.tag);

    if (event.tag === 'sync-form-data') {
        event.waitUntil(
            // Future implementation: sync form submissions when back online
            Promise.resolve()
        );
    }
});

// Push Notifications (for future feature)
self.addEventListener('push', (event) => {
    console.log('[SW] Push notification received');

    const options = {
        body: event.data ? event.data.text() : 'New notification from SybTech',
        icon: '/static/images/favicon.png',
        badge: '/static/images/favicon.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };

    event.waitUntil(
        self.registration.showNotification('SybTech', options)
    );
});

// Notification Click Handler
self.addEventListener('notificationclick', (event) => {
    console.log('[SW] Notification clicked');
    event.notification.close();

    event.waitUntil(
        clients.openWindow('/')
    );
});

// Message Handler (for client-SW communication)
self.addEventListener('message', (event) => {
    console.log('[SW] Message received:', event.data);

    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }

    if (event.data.action === 'clearCache') {
        event.waitUntil(
            caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => caches.delete(cacheName))
                );
            })
        );
    }
});

console.log('[SW] SybTech Service Worker loaded successfully');
