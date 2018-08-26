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
    };
    
    // Add active class to first li element
    createUl.firstChild.classList.add('nav-elem-active');
    
    // Create constances
    const ul = document.querySelector('.nav');
    const li = ul.querySelectorAll('.nav-elem');
    const a = ul.querySelectorAll('.nav-link');
    
    const linkName = ['Home', 'Offer', 'Gallery', 'About Us', 'Our Team', 'Contact'];
    
    for(let i = 0; i < li.length; i++) {
        // Add names of menu boxes
        li[i].children[0].innerText = linkName[i];
        
        // Add event on links
        a[i].addEventListener('click', function() {
            // Choose all elements li
            const allLi = this.parentElement.parentElement.children;
            
            for(let i =0; i < li.length; i++) {
                // Remove class
                allLi[i].classList.remove('nav-elem-active');
            };
            // Add class
            this.parentElement.classList.add('nav-elem-active');
        });
    };
})




















