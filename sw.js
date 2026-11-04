// NEXORA service worker: بدون تخزين مؤقت، عشان العميل يشوف دايماً آخر نسخة وأسعار محدّثة
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{
  if(e.request.mode==="navigate"){
    e.respondWith(fetch(e.request).catch(()=>new Response("<meta charset=utf-8><body style='font-family:sans-serif;text-align:center;padding:40px' dir=rtl><h2>لا يوجد اتصال بالإنترنت</h2><p>تأكد من الاتصال وحاول مرة أخرى.</p>",{headers:{"Content-Type":"text/html; charset=utf-8"}})));
  }
});
