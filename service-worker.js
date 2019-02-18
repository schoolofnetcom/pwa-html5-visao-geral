let cacheName = 'dp-pwa';
let filesToCache = [
    '/',
    'index.html',
    'styles.css',
    'scripts.js',
];

self.addEventListener('install', function (e) {
    console.log('Service Worker Installer');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    )
});

self.addEventListener('fetch', function (e) {
    console.log('Service Worker Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response  || fetch(e.request);
        })
    )
});