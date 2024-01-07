let logo = document.querySelector('.logo')
let smallLogo = document.querySelector('.small-logo')
let nav = document.querySelector('nav')

window.onscroll = () => {
    if (document.documentElement.scrollTop > 100) {
        logo.style.opacity = '0'
        nav.classList.add('isFixed')
        smallLogo.style.opacity = '1'
    } else {
        logo.style.opacity = '1'
        nav.classList.remove('isFixed');
        smallLogo.style.opacity = '0'
    }
}

    

let sliderImg = document.querySelectorAll(".slider-img");

let sliderInner = document.querySelector(".slider-inner");

let sliderActual= 0;

setInterval ( () => {

    if (sliderActual < sliderImg.length - 1) {
  
        sliderActual++;
        
        let calculo = sliderActual * -100;
      
        sliderInner.style.transform = `translateX(${calculo}vw)`;

    } else if (sliderActual == sliderImg.length -1) {

        sliderActual = 0;
        
        let calculo = sliderActual * -100;
     
        sliderInner.style.transform = `translateX(${calculo}vw)`;
    }

}, 5000) 

