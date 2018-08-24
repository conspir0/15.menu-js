'use strict';

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Hello World!');
    
    const title = document.querySelector('h1');
    
    title.addEventListener('click', function() {
        title.classList.toggle('change-font-color');
    })
})