const menubutton = document.querySelector('.hover-button');
const navbar = document.querySelector('.navbar');

menubutton.addEventListener("mouseenter" , ()=>{
    navbar.classList.add('expanded')
});

navbar.addEventListener('mouseleave' , ()=>{
    navbar.classList.remove('expanded');
});
