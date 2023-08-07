const urlsToCache = [
    '/coin-flipper/',
    '/coin-flipper/images/icon/icon-32x32.png',
    '/coin-flipper/images/icon/icon-48x48.png',
    '/coin-flipper/images/icon/icon-96x96.png',
    '/coin-flipper/images/icon/icon-144x144.png',
    '/coin-flipper/images/icon/icon-192x192.png',
    '/coin-flipper/images/icon/icon-512x512.png',
    '/coin-flipper/images/icon/icon.ico',
    '/coin-flipper/images/heads-large.webp',
    '/coin-flipper/images/heads-medium.webp',
    '/coin-flipper/images/heads-small.webp',
    '/coin-flipper/images/tails-large.webp',
    '/coin-flipper/images/tails-medium.webp',
    '/coin-flipper/images/tails-small.webp',
    '/coin-flipper/scripts/coin-flipper.js',
    '/coin-flipper/styles/style.css'
];

self.addEventListener('install', event => {
    console.log('Service worker installing...');
    event.waitUntil(
        caches.open('v1')
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
    console.log('Service worker installed!');
});

self.addEventListener('activate', event => {
    console.log('Service worker activating...');
    console.log('Service worker activated!');
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return fetch(event.request) || response;
        })
    );
});