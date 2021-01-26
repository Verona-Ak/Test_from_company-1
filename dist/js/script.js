window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    const dropBtns = document.querySelectorAll('.drop__btn'),
        dropMenu = document.querySelector('.drop__menu');
    
    for (let btn of dropBtns) {
        btn.addEventListener('click', ()=> {
            let parent = btn.closest('li');
            parent.appendChild(dropMenu);
            dropMenu.classList.add('drop__menu-active');

        });
    }

    

});