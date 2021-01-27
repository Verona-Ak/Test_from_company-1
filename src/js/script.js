window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Настройка реакции эл-та на активную кнопку

    const carBtns = document.querySelectorAll('.goods__btn');
    for (let btn of carBtns) {
        btn.addEventListener('click', function() {
            btn.classList.toggle('goods__btn_focus');
            let parent = btn.closest('.goods__add').closest('.goods__item');
            parent.classList.toggle('goods__item_focus');
        });
    }


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