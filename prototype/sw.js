const CACHE_NAME='personal-workbench-v1';
const APP_SHELL=['./','./personal-workbench-mobile.html','./manifest.webmanifest','./supabase-config.js','./assets/fox-icon-1024.png'];

self.addEventListener('install',function(event){event.waitUntil(caches.open(CACHE_NAME).then(function(cache){return cache.addAll(APP_SHELL)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(event){event.waitUntil(caches.keys().then(function(keys){return Promise.all(keys.filter(function(key){return key!==CACHE_NAME}).map(function(key){return caches.delete(key)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(event){if(event.request.method!=='GET')return;event.respondWith(fetch(event.request).then(function(response){if(response.ok&&new URL(event.request.url).origin===self.location.origin){const copy=response.clone();caches.open(CACHE_NAME).then(function(cache){cache.put(event.request,copy)})}return response}).catch(function(){return caches.match(event.request).then(function(response){return response||caches.match('./personal-workbench-mobile.html')})}))});
