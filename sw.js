const CACHE_NAME = 'v1';
const urlsToCache = [
    '/coin-flipper/',
    '/coin-flipper/manifest.json',
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
        caches.open(CACHE_NAME)
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

self.addEventListener("fetch", event => {
    async function returnCachedResource() {
        // Open the app's cache.
        const cache = await caches.open(CACHE_NAME);
        // Find the response that was pre-cached during the `install` event.
        const cachedResponse = await cache.match(event.request.url);

        if (cachedResponse) {
            // Return the resource.
            return cachedResponse;
        } else {
            // The resource wasn't found in the cache, so fetch it from the network.
            const fetchResponse = await fetch(event.request.url);
            // Put the response in cache.
            cache.put(event.request.url, fetchResponse.clone());
            // And return the response.
            return fetchResponse;
        }
    }

    event.respondWith(returnCachedResource());
});