const CACHE_NAME = 'my-cache';
const urlsToCache = [
    '/coin-flipper/',
    '/coin-flipper/images/heads.png',
    '/coin-flipper/images/tails.png',
    '/coin-flipper/scripts/main.js',
    '/coin-flipper/scripts/script.js',
    '/coin-flipper/styles/style.css'
];

self.addEventListener('install', event => {
    console.log('Service worker installing...');
    event.waitUntil(cacheFiles())
    self.skipWaiting();
    console.log('Service worker installed!');
});

self.addEventListener('activate', event => {
    console.log('Service worker activating...');
    console.log('Service worker activated!');
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

const cacheFiles = function () {
    return caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(urlsToCache);
    });
};