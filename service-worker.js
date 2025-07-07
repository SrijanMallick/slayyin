const CACHE_NAME = 'slayyin-v3';
const urlsToCache = [
  './',
  './index.html',
  './index.css',
  './products.js',
  './website-logo.png',
  './favicon_io (2)/android-chrome-192x192.png',
  './favicon_io (2)/android-chrome-512x512.png',
  './favicon_io (2)/apple-touch-icon.png',
  './favicon_io (2)/site.webmanifest'
];

console.log('🔧 Service Worker: Starting with cache name:', CACHE_NAME);

// Install service worker
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker: Install event fired');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('🔧 Service Worker: Cache opened successfully');
        
        // Cache files individually to handle failures gracefully
        const cachePromises = urlsToCache.map(url => {
          return cache.add(url).catch(error => {
            console.warn('🔧 Service Worker: Failed to cache', url, error);
            // Don't fail the entire installation if one file fails
            return Promise.resolve();
          });
        });
        
        return Promise.all(cachePromises);
      })
      .then(() => {
        console.log('🔧 Service Worker: Caching completed');
        return self.skipWaiting(); // Take control immediately
      })
      .catch((error) => {
        console.error('🔧 Service Worker: Install failed:', error);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate service worker
self.addEventListener('activate', (event) => {
  console.log('🔧 Service Worker: Activate event fired');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🔧 Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('🔧 Service Worker: Activated successfully');
      return self.clients.claim(); // Take control of all clients
    })
  );
}); 