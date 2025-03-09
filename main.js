const navtoggle=document.querySelector(".menu");
const navmenu=document.querySelector(".nav-list");
navtoggle.addEventListener("click",()=>{
navmenu.classList.toggle("nav-menu-visible")
});


 const fecha=document.getElementById("year").textContent = new Date().getFullYear();
