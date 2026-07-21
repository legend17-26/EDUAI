/**
 * EDUPATH AI - SERVICE WORKER (PWA & OFFLINE)
 */
const CACHE_NAME = 'edupath-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/pages/index.html',
  '/pages/dashboard.html',
  '/pages/roadmap.html',
  '/pages/tools.html',
  '/assets/css/main.css',
  '/assets/css/layout.css',
  '/assets/css/components.css',
  '/assets/js/app.js',
  '/assets/js/api.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});