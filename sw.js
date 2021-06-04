'use strict';

var cacheVersion = 1;
var currentCache = {
   offline: 'offline-cache' + cacheVersion
};

// Page you want to cache
const offlinePage = ‘offline.html';

this.addEventListener('install', event => {
   event.waitUntil(
      caches.open(currentCache.offline).then(function(cache) {
         return cache.addAll([offlinePage]);
      })
   );
});

// Now to retrieve the cached pages, we will use the fetch event.
this.addEventListener('fetch', event => {
   if(event.request.mode === 'navigate' || (event.request.method === 'GET')) {
      event.respondWith(
         fetch(event.request.url).catch(error => {
            // Return the offline page
            return caches.match(offlinePage);
         })
      );
   }
   else{
      event.respondWith(
         caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
         })
      );
   }
});
