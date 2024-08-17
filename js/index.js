let menuBTN=document.getElementById("menuBTN");
let navbar=document.getElementById("navbar");
let Mobileview=document.getElementById("Mobileview");
let contener=document.getElementById("contener");
let backbtn=document.getElementById("backbtn");


menuBTN.addEventListener("click",function(){
    navbar.style.display="none";
    contener.style.display="none";
    Mobileview.style.display="flex"

});

backbtn.addEventListener("click",function(){
    Mobileview.style.display="none"
    navbar.style.display="flex";
    contener.style.display="flex";
    

});

a=true;
var typed = new Typed('#codetext', {
     strings: ['"Hello world"', '  I am Adarsha Nanda. ',' A frontend web developer ','adarshananda.com', 'Git Hub: adarsha-nanda4',
    'Linkedin: Adarsha Nanda'],
     typeSpeed: 100,
     loop:true
   });


//    window.onload = function() {
//     window.scrollTo(0,document.body.scrollHeight);
// }





// let sections=document.querySelectorAll('section')
// window.onscroll= () =>{
//     sections.forEach(sec =>{
//         let top = window.scrollY;
//         let offset =sec.offsetTop -150;
//         let height=sec.offsetHeight;

//         if(top >= offset && top<offset + height){
//             sec.classList.add('show-animate');
//         }
//         else{
//             sec.classList.remove('show-animate');
//         }
//     })
// }

self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/script.js',
          '/manifest.json',
          '/icon-192x192.png',
          '/icon-512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
    });
  }
  