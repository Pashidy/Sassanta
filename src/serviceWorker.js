// This optional code enables offline functionality
const cacheName = 'sassanta-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))
  );
});

