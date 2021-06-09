'use strict';
// Burger Button Mobile
    const burgerBtn = document.querySelector('.burger'); //Container for burger lines
    let burger1open = document.querySelector('.burger__1'); //Burger line 1
    let burger2open = document.querySelector('.burger__2'); //Burger line 2

    let navMenu = document.querySelector('.navigation'); //Nav menu

    burgerBtn.addEventListener('click', () => {
        burger1open.classList.toggle('open'); //Burger line 1
        burger2open.classList.toggle('open'); //Burger line 2
        navMenu.classList.toggle('active'); //Open nav menu
    });

