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
let pixel=document.getElementById("pixel");
pixel.addEventListener("click",function(){
    window.location=("https://github.com/adarsha-nanda4/pixel-website")
})









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