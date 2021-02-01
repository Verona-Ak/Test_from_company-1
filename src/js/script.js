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

    // drop menu

    const dropBtns = document.querySelectorAll('.drop__btn'),
        arrows = document.querySelectorAll('.drop__img'),
        menu = document.querySelectorAll('.drop__menu');

    let windowInnerWidth;

    for (let btn of dropBtns) {
        btn.addEventListener('click', ()=> {
            windowInnerWidth = window.innerWidth;

            if(windowInnerWidth > 575) {
                for(let i = 0; i < dropBtns.length; i++) {
                    if(dropBtns[i] !== btn) {
                        removeClasses(dropBtns[i], arrows[i], menu[i]);
                    }
                    
                }
            }
            

            btn.classList.toggle('drop__btn_active');

            for(let i = 0; i < arrows.length; i++) {
                if(arrows[i].closest('li') === btn.closest('li')) {
                    arrows[i].classList.toggle('drop__img_active');
                }
            }
            
            for(let i = 0; i < menu.length; i++) {
                if(menu[i].closest('li') === btn.closest('li')) {
                    menu[i].classList.toggle('drop__menu_active');
                }
            }
        });
    }

    function removeClasses(btn, arrow, menu) {
        btn.classList.remove('drop__btn_active');
        arrow.classList.remove('drop__img_active');
        menu.classList.remove('drop__menu_active');
    }
    // Закрытие подкатегорий при клике в к-л точку на странице
    window.addEventListener('click', function(e) {
        windowInnerWidth = window.innerWidth;

        if(windowInnerWidth > 575) {
            let index = true;
            for(let btn of dropBtns) {
                if(e.target && e.target === btn) {
                    index = !index;
                    break;
                }
            }
            if(index) {
                for(let i = 0; i < dropBtns.length; i++) {
                    removeClasses(dropBtns[i], arrows[i], menu[i]);
                }
            }
        }
    });


    // Гамбургер
    var countVar = 0;
    $('.nav-catalog__hamburger').click( function() {
        countVar +=1;
        
        if(countVar % 2 !== 0) {
            changeClass();
            $(".nav-catalog__list_active").slideDown("slow");
        } else {
            $(".nav-catalog__list_active").slideUp("slow");
            changeClass();
            for(let i = 0; i < dropBtns.length; i++) {
                removeClasses(dropBtns[i], arrows[i], menu[i]);
            }
        }
    });
    function changeClass() {
        $('.nav-catalog__hamburger').toggleClass('nav-catalog__hamburger_active');
        $('.nav-catalog__title').toggleClass('nav-catalog__title_active');
        $('.nav-catalog__list').toggleClass('nav-catalog__list_active');
    }

    // Фиксированная боковая панель
    let stickySidebar = new StickySidebar('#sidebar', {
        topSpacing: 10,
        bottomSpacing: 100,
        containerSelector: '.main',
        innerWrapperSelector: '.sidebar__inner',
        resizeSensor: true,
        stickyClass: 'is-affixed',
        minWidth: 0
    });


    // Hamburger в шапке
    const hamburgerHeader = document.querySelector('.header__hamburger'),
        navList = document.querySelector('.nav__list'),
        navItems = document.querySelectorAll('.nav__item');


    hamburgerHeader.addEventListener('click', function() {
        hamburgerHeader.classList.toggle('header__hamburger_active');
        navList.classList.toggle('nav__list_active');
    });

    for(let item of navItems) {
        item.addEventListener('click', function(e) {
            hamburgerHeader.classList.remove('header__hamburger_active');
            navList.classList.remove('nav__list_active');
        });
    }
    
});
