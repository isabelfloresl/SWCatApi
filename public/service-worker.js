
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('cat-api-cache').then((cache) => {
        return cache.addAll([
          '/', 
          '/index.html', 
          '/manifest.js',
          '/service-worker.js',
          './components/FavoriteImages.js',
          './components/ImageCard.js',
          './App.js',
          './index.js'
        ]);
      })
    );
  });
  
  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          return cache.addAll(urlsToCache);
        })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request);
        })
    );
  });