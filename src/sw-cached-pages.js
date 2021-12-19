const cacheName = 'v2';

// Call Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');
});

// Call Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if ((cache !== cacheName)) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

const isExpired = (response) => {
  if (!response) return false;
  var fetched = response.headers.get('sw-fetched-on');
  if (fetched && (parseFloat(fetched) + (1000 * 60 * 2)) < new Date().getTime()) return true;
  return false;
};

// Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Make copy/clone of response
        const resClone = res.clone();
        const headers = new Headers(resClone.headers);
        headers.append('sw-fetched-on', new Date().getTime());
        // Open cahce
        caches.open(cacheName).then(cache => {
          // Add response to cache
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch(err => caches.match(e.request).then(res => res))
  );
});
