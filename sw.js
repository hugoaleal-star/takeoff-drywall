const CACHE='takeoff-drywall-v43';
const ASSETS=['./','./index.html','./lackey-logo.png','./manifest.webmanifest','./vendor/exceljs.min.js','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS.map(path=>new Request(path,{cache:'reload'})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('takeoff-drywall-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
  event.respondWith(caches.open(CACHE).then(async cache=>{
    if(event.request.mode==='navigate'){
      try{const fresh=await fetch(event.request,{cache:'no-store'});if(fresh.ok){await cache.put('./index.html',fresh.clone());return fresh;}}catch(error){}
      return cache.match('./index.html');
    }
    const cached=await cache.match(event.request);
    if(cached)return cached;
    try{return await fetch(event.request);}catch(error){
      if(event.request.mode==='navigate')return cache.match('./index.html');
      throw error;
    }
  }));
});
