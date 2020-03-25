var serviceWorkerPath = '/sworker-locked.js'
   var appletLocation = '/'
   
   function isServiceWorkerSupported() {
       return 'serviceWorker' in navigator && location.protocol === "https:";
   }
   
   function installServiceWorker() {
       if (navigator.serviceWorker.controller) {
           console.log("Service worker is already controlling the page.");
       } else {
           navigator.serviceWorker.register(serviceWorkerPath, {
               scope: appletLocation
           });
       }
   }
   
   if (isServiceWorkerSupported()) {
       window.addEventListener('load', function() {
           installServiceWorker()
       });
   } else {
       console.log("Service workers are not supported.");
   }