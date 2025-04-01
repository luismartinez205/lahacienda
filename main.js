// menu hamburguesa
const navtoggle=document.querySelector(".menu");
const navmenu=document.querySelector(".nav-list");
navtoggle.addEventListener("click",()=>{
navmenu.classList.toggle("nav-menu-visible")
});

//barra de navegacion fixed
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
/////recaptcha//
 const clave = '6LeSvgErAAAAADITmZjJtVZmBpu_pA0Kb4I24giK';

 
 function onSubmit(token) {
   document.getElementById("main-contact-form").submit();
 }

 /////recaptchafin//
//imagenes que aumentan al pasar el mouse
const images = document.querySelectorAll('.img-main');

images.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'all 0.2s ease';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
        img.style.transition = 'all 0.2s ease';
    });
});

//imagenes fin codigo




