'use strict';

document.addEventListener('DOMContentLoaded', function() {
    
    // Create ul
    const createUl = document.createElement('ul');
    createUl.classList.add('nav');
    
    document.body.appendChild(createUl);
    
    let createLi = '';
    let createLink = '';
    for(let i = 0; i < 6; i++) {
        
    // Create ul > li
    createLi = document.createElement('li');
    createLi.classList.add('nav-elem');
    createUl.appendChild(createLi);
    
    // Create ul > li > a
    createLink = document.createElement('a');
    createLink.classList.add('nav-link');
    createLink.href = '#';
    createLi.appendChild(createLink);
    }
    // Add active class to first li element
    createUl.firstChild.classList.add('nav-elem-active');
    
    // Create constances
    const ul = document.querySelector('.nav');
    const li = ul.querySelectorAll('.nav-elem');
    
    // Add names of menu boxes
    li[0].children[0].innerText = 'Home';
    li[1].children[0].innerText = 'Offer';
    li[2].children[0].innerText = 'Gallery';
    li[3].children[0].innerText = 'About Us';
    li[4].children[0].innerText = 'Our Team';
    li[5].children[0].innerText = 'Contact';

})