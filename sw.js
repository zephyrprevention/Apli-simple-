// Service worker — Art de Vivre Caisse
// v9 : "réseau d'abord" pour la page, afin que les mises à jour
// apparaissent immédiatement. Le cache ne sert que de secours hors-ligne.
const CACHE = 'adv-caisse-v14';
const ASSETS = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const estPage = req.mode === 'navigate' ||
                  url.pathname.endsWith('/') ||
                  url.pathname.endsWith('index.html');

  // La page : réseau d'abord, cache en secours.
  if (estPage) {
    e.respondWith(
      fetch(req, { cache: 'no-store' })
        .then((resp) => {
          const copie = resp.clone();
          caches.open(CACHE).then((c) => c.put('./index.html', copie)).catch(() => {});
          return resp;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Icônes, polices, SDK : cache d'abord (ne changent jamais).
  e.respondWith(
    caches.match(req).then((cache) =>
      cache || fetch(req).then((resp) => {
        const copie = resp.clone();
        caches.open(CACHE).then((c) => c.put(req, copie)).catch(() => {});
        return resp;
      })
    )
  );
});
