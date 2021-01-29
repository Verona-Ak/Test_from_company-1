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
    let dropMenu = document.createElement('ul');
    dropMenu.classList.add('drop__menu');

    dropMenu.innerHTML = `<li class="drop__item"><a href="#" class="drop__link">Подкатегория</a></li><li class="drop__item"><a href="#" class="drop__link">Подкатегория ховер</a></li><li class="drop__item"><a href="#" class="drop__link">Длинное название подкатегории</a></li><li class="drop__item"><a href="#" class="drop__link">Подкатегория 2</a></li>`;

    const dropBtns = document.querySelectorAll('.drop__btn'),
        arrows = document.querySelectorAll('.drop__img');
    
    for (let btn of dropBtns) {
        btn.addEventListener('click', ()=> {
            let count = 0;
            while(count < dropBtns.length) {
                clearStyle(dropBtns[count], arrows[count]);
                count++;
            }

            let parent = btn.closest('li');
            parent.appendChild(dropMenu);
            dropMenu.classList.add('drop__menu_active');
            btn.style.color = '#FFFFFF';


            for(let i = 0; i < arrows.length; i++) {
                if(arrows[i].closest('li') === parent) {
                    arrows[i].src = 'img/main/aside/chevron-white.svg';
                }
            }
        });
    }
    function clearStyle(btn, arrow) {
        btn.style.color = '';
        arrow.src = 'img/main/aside/chevron-black.svg';
    }

    window.addEventListener('click', function(e) {
        let index = true;
        for(let btn of dropBtns) {
            if(e.target && e.target === btn) {
                index = !index;
                break;
            }
        }
        if(index) {
            for(let item of dropBtns) {
                item.style.color = '';
            }
            for(let arrow of arrows) {
                arrow.src = 'img/main/aside/chevron-black.svg';
            }
            try{
                dropMenu.classList.remove('drop__menu-active');
                let parent = dropMenu.closest('li');
                parent.removeChild(dropMenu);
            } catch(e) {
                console.log(`Поймана ошибка: ${e}`);

                
            }
            
        }
        
    });

    // Гамбургер
    var countVar = 0;
    $('.hamburger').click( function() {
        countVar +=1;
        if(countVar % 2 !== 0) {
            changeClass();
            $(".nav-catalog__list_active").slideDown("slow");
        } else {
            $(".nav-catalog__list_active").slideUp("slow");
            changeClass();
        }
    });
    function changeClass() {
        $('.hamburger').toggleClass('hamburger_active');
        $('.nav-catalog__title').toggleClass('nav-catalog__title_active');
        $('.nav-catalog__list').toggleClass('nav-catalog__list_active');
    }

    // Фиксированная боковая панель
    var stickySidebar = new StickySidebar('#sidebar', {
        topSpacing: 10,
        bottomSpacing: 100,
        containerSelector: '.main',
        innerWrapperSelector: '.sidebar__inner',
        resizeSensor: true,
        stickyClass: 'is-affixed',
        minWidth: 0
    });
});
