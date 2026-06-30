const CACHE = 'vertoq-v2';

const PRECACHE = [
  '/',
  '/en/',
  '/sv/',
  '/en/units/',
  '/en/percent/',
  '/en/time/',
  '/en/bmi/',
  '/en/tdee/',
  '/en/loancost/',
  '/manifest.json',
  '/favicon.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first för navigering (alltid färskt innehåll), cache-first för assets
self.addEventListener('fetch', (event) => {
  if (!event.request.url.startsWith(self.location.origin)) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(event.request, clone));
          return res;
        })
        .catch(() =>
          caches.match(event.request).then((r) => r || caches.match('/en/'))
        )
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((res) => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then((c) => c.put(event.request, clone));
          }
          return res;
        });
      })
    );
  }
});
