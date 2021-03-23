'use strict';

document.addEventListener("touchstart", function() {}, true);

    const burgerBtn = document.querySelector('.burger');
    let burger1open = document.querySelector('.burger__1');
    let burger2open = document.querySelector('.burger__2');

    let navMenu = document.querySelector('.navigation');

    burgerBtn.addEventListener('click', () => {
        burger1open.classList.toggle('open');
        burger2open.classList.toggle('open');
        navMenu.classList.toggle('active');
    })


// const pricePlanBackground = document.querySelectorAll('.toggleWrapper__buttonBackground')
// const pricePlanButton = document.querySelectorAll('.toggleWrapper__button')

// pricePlanButton.addEventListener('click', () => {
//     pricePlanBackground.classList.toggle("Yearly");
//     pricePlanButton.classList.toggle("Yearly");
// });

// var pricePlanToggle = () => {
//     var pricePlanBackground = document.querySelector('toggleWrapper__buttonBackground')
//     var pricePlanButton = document.querySelector('toggleWrapper__button')

//     pricePlanButton.addEventListener('click', () => {
//         pricePlanBackground.classList.toggle(".Yearly");
//         pricePlanButton.classList.toggle(".Yearly");
//     });
// }

// pricePlanToggle();

// const button = document.querySelector('toggleWrapper__button');

// button.addEventListener('click', () => {
//     button.classList.toggle("toggleWrapper__buttonYearly");
// })