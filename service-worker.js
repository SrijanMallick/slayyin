const CACHE_NAME = 'slayyin-v4';
const urlsToCache = [
  './',
  './index.html',
  './index.css',
  './products.js',
  './custom-merch.js',
  './config.js',
  './website-logo.png',
  './favicon_io (2)/android-chrome-192x192.png',
  './favicon_io (2)/android-chrome-512x512.png',
  './favicon_io (2)/apple-touch-icon.png',
  './favicon_io (2)/favicon-32x32.png',
  './favicon_io (2)/favicon.ico'
];

console.log('🔧 Service Worker: Starting with cache name:', CACHE_NAME);

// Install service worker
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker: Install event fired');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('🔧 Service Worker: Cache opened successfully');
        
        // Cache core files first (essential for PWA)
        const coreFiles = ['./', './index.html', './index.css', './website-logo.png'];
        
        return cache.addAll(coreFiles)
          .then(() => {
            console.log('🔧 Service Worker: Core files cached');
            
            // Cache remaining files individually to handle failures gracefully
            const remainingFiles = urlsToCache.filter(url => !coreFiles.includes(url));
            const cachePromises = remainingFiles.map(url => {
              return cache.add(url).catch(error => {
                console.warn('🔧 Service Worker: Failed to cache', url, error);
                return Promise.resolve();
              });
            });
            
            return Promise.all(cachePromises);
          });
      })
      .then(() => {
        console.log('🔧 Service Worker: All caching completed');
        // Skip waiting to activate immediately
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('🔧 Service Worker: Install failed:', error);
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
      // Take control of all clients immediately
      return self.clients.claim();
    }).then(() => {
      // Notify clients that service worker is ready
      return self.clients.matchAll();
    }).then((clients) => {
      clients.forEach(client => {
        client.postMessage({
          type: 'SW_ACTIVATED',
          message: 'Service Worker activated and ready'
        });
      });
    })
  );
});

// Enhanced fetch event with better caching strategy
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          console.log('🔧 Service Worker: Serving from cache:', event.request.url);
          return response;
        }
        
        // Otherwise fetch from network and cache the response
        return fetch(event.request).then((response) => {
          // Check if response is valid
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response as it can only be consumed once
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch((error) => {
          console.log('🔧 Service Worker: Fetch failed:', error);
          // Return a fallback response if available
          return caches.match('./index.html');
        });
      })
  );
});

// Listen for messages from the main thread
self.addEventListener('message', (event) => {
  console.log('🔧 Service Worker: Received message:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
}); 
