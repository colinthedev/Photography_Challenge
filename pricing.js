'use strict';

// Toggle Button Pricing Section
    // Button
    let button = document.querySelector('.toggleWrapper__button');
    let buttonBackground = document.querySelector('.toggleWrapper__buttonBackground');
    // Pricing of plans
    let price1 = document.getElementById('yearly--19');
    let price2 = document.getElementById('yearly--39');
    let price3 = document.getElementById('yearly--99');

// Toggle between monthly and yearly button and background colors 
    const toggleYearly = function() {
        buttonBackground.classList.toggle('yearly');
        button.classList.toggle('yearly');

        // Display monthly or yearly prices on click
        if(buttonBackground.classList.contains('yearly')) {
            price1.textContent = '$190.00';
            price2.textContent = '$390.00';
            price3.textContent = '$990.00';
        }else {
            price1.textContent = '$19.00';
            price2.textContent = '$39.00';
            price3.textContent = '$99.00';
        }
    }

// On click change background color + button color + text content
    button.addEventListener('click', toggleYearly); 