!function(){var e=["975ab4c55738488b/bundle.js","d31b0dfa99885891/bundle.css","assets/.DS_Store","assets/agree.png","assets/icon.png","assets/p1.png","assets/p2.png","assets/p3.png","assets/p4.JPG","assets/qrcode.png","assets/wrong.png","manifest.json"];self.addEventListener("fetch",function(e){e.respondWith(self.caches.match(e.request).then(function(s){return s||self.fetch(e.request)}))}),self.addEventListener("install",function(s){s.waitUntil(self.caches.open("1.0.0").then(function(s){return s.addAll(e)}))}),self.addEventListener("activate",function(e){e.waitUntil(self.caches.keys().then(function(e){return Promise.all(e.map(function(s,n){if("1.0.0"!==e[n])return self.caches.delete(e[n])}))}))})}();
//# sourceMappingURL=bankai-service-worker.js.map