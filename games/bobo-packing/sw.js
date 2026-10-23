const CACHE='bobo-packing-v1.0.3';
const FILES=['./','./index.html','./style.css','./app.mjs','./engine.mjs','./levels.mjs','./storage.mjs','./audio.mjs','./render.mjs','./manifest.webmanifest','./assets/noto-sans-sc-bobo.woff2','./assets/noto-symbols-bobo.woff2','./assets/icon.svg','./assets/hero.webp','./assets/bobo-groove.m4a'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('bobo-packing-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin)return;event.respondWith(fetch(event.request).then(response=>{if(response.ok&&response.status!==206){const copy=response.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));}return response;}).catch(async()=>{
  const cached=await caches.match(event.request.url);if(!cached)return event.request.mode==='navigate'?(await caches.match('./index.html'))||Response.error():Response.error();
  const range=event.request.headers.get('range');if(!range)return cached;
  const match=/^bytes=(\d*)-(\d*)$/.exec(range);if(!match)return Response.error();
  const bytes=await cached.arrayBuffer(),size=bytes.byteLength;let start=match[1]?Number(match[1]):Math.max(0,size-Number(match[2])),end=match[1]?(match[2]?Math.min(size-1,Number(match[2])):size-1):size-1;
  if(!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||start>end||start>=size)return new Response(null,{status:416,headers:{'Content-Range':`bytes */${size}`}});
  return new Response(bytes.slice(start,end+1),{status:206,headers:{'Content-Type':cached.headers.get('Content-Type')||'application/octet-stream','Content-Length':String(end-start+1),'Content-Range':`bytes ${start}-${end}/${size}`,'Accept-Ranges':'bytes'}});
}));});
