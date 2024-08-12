// show menu
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close');
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}
// menu show
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
// remove menu mobile
const navLink=document.querySelectorAll('.nav__link')
const linkAction=() =>{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
    navLink.forEach(n => n.addEventListener('click',linkAction))
}
// add shadow header
const shadowHeader= () =>{
    const header= document.getElementById('header');
    //add a class if the bottom offset is greaterr than 50 of the width
    this.scrollY >= 50 ? header.classList.add('shadow-header'):header.classList.remove('shadow-header')

}
window.addEventListener('scroll',shadowHeader)
// show scroll up
const scrollup =() =>{
    const scrollup = document.getElementById('scroll-up')
    this.scrollY >= 350? scrollup.classList.add('show-scroll'):
                                    scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup)
// scroll  sections active link
const sections=document.querySelectorAll('section[id]')
const scrollActive = () =>{
    const scrolldown = window.ScrollY
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop=current.offsetTop - 58,
        sectionId=current.getAttribute('id'),
        sectionClass=document.querySelector('.nav__menu a[href*='+sectionId+']')
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sections.classList.add('active-link')
        }
        else{
          sectionClass.classList.remove('active-link')
        }
        })
}
window.addEventListener('scroll',scrollActive)
// scroll reveal animation
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:300,
    // reset : true ,//animation repeat
})
const arrow = document.getElementById('arrow');

arrow.addEventListener('click', () => {
    if (arrow.classList.contains('arrow-up')) {
        // If the arrow is pointing up, scroll to the top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // If the arrow is pointing down, scroll to the bottom
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY <= 0) {
        // If at the top, show the down arrow
        arrow.classList.remove('arrow-up');
        arrow.classList.add('arrow-down');
    } else if (window.scrollY >= document.body.scrollHeight - window.innerHeight) {
        // If at the bottom, show the up arrow
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-up');
    } else if (arrow.classList.contains('arrow-down')) {
        // If in the middle and the arrow is pointing down, switch to up arrow
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-up');
    }
});

sr.reveal('.home__data,.footer')
sr.reveal('.home__dish',{delay:500,distance:'100px',origin:'bottom'})
sr.reveal('.home__burger',{delay:1200,distance:'100px',duration:1500})
sr.reveal('.home__ingredient',{delay:1600,interval:100})
sr.reveal('.recipe__img,.delivery__img,.contact__image',{origin:'left'})
sr.reveal('recipe__data,.delivery__data,.contact__data',{origin:'right'})
sr.reveal('.popular__card',{interval:100})