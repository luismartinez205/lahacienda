const navtoggle=document.querySelector(".menu");
const navmenu=document.querySelector(".nav-list");
navtoggle.addEventListener("click",()=>{
navmenu.classList.toggle("nav-menu-visible")
});


 const fecha=document.getElementById("year").textContent = new Date().getFullYear();

 const nav = document.querySelector('.navbar');

 
 window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('fixed-nav');
        } else {
            nav.classList.remove('fixed-nav');
        }

        if (window.scrollY > 1500) {
            nav.classList.add('hidden-nav');
        } else {
            nav.classList.remove('hidden-nav');
        }
        
 });

 const clave = '6LeSvgErAAAAADITmZjJtVZmBpu_pA0Kb4I24giK';

 
 function onSubmit(token) {
   document.getElementById("main-contact-form").submit();
 }

 




 
