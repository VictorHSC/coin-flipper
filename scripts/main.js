
if (!('serviceWorker' in navigator)) {
    console.log('Service worker not supported');
} else if (!navigator.serviceWorker.controller) {
    navigator.serviceWorker.register('/coin-flipper/sw.js').then(function (registration) {
        console.log('Service worker has been registered for scope: ' + registration.scope);
    });
}