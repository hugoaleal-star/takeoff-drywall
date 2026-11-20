// Retire the public offline application without removing local pending records.
self.addEventListener('install',e=>e.waitUntil(self.skipWaiting()));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('takeoff-drywall-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim()).then(()=>self.registration.unregister())));
