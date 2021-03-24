'use strict';

    const burgerBtn = document.querySelector('.burger'); //Container for burger lines
    let burger1open = document.querySelector('.burger__1'); //Burger line 1
    let burger2open = document.querySelector('.burger__2'); //Burger line 2

    let navMenu = document.querySelector('.navigation'); //Nav menu

    burgerBtn.addEventListener('click', () => {
        burger1open.classList.toggle('open'); 
        burger2open.classList.toggle('open'); 
        navMenu.classList.toggle('active'); //Open nav menu
    });



    document.querySelector('.toggleWrapper__button').addEventListener('click', () => {
        //Change prices
        document.querySelector('#yearly190').textContent = '$190.00'
        document.querySelector('#yearly390').textContent = '$390.00'
        document.querySelector('#yearly990').textContent = '$990.00'

        //Change toggle button position
        document.querySelector('.toggleWrapper__button').style.margin = 'auto .5rem auto auto';

        //Change toggle button colors
        document.querySelector('.toggleWrapper__buttonBackground').style.backgroundColor = '#000';
        document.querySelector('.toggleWrapper__button').style.backgroundColor = '#fff';
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