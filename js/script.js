// Обработка клика на кнопку каталога в шапке
const headerCatalogBtn = document.querySelector('.js-header-catalog');
headerCatalogBtn.addEventListener('click', (e) => e.target.classList.toggle('active'))

// слайдер
const popularSlider = new Swiper('.popular-inner', {
    allowTouchMove: false,
    slideActiveClass: 'popular-item-active',
    effect: 'creative',
    watchOverflow: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.popular-item__pagination',
        clickable: true
    }
})


// обработка табов в блоке .about

// кнопки и табы
const aboutButtons = document.querySelectorAll('.about-buttons__item');
const aboutTabs = document.querySelectorAll('.about-tab');
console.log(aboutButtons)
// переназначение класса active для кнопок
function buttonToggle(id){
    // удаление активного класса
    for(let buttonId = 0; buttonId < aboutButtons.length; buttonId++){
        aboutButtons[buttonId].classList.remove('active');
    }
    // добавление активного класса
    aboutButtons[id].classList.add('active');
}

// переназначение класса active для табов
function tabToggle(id){
    // удаление активного класса
    for(let tabId = 0; tabId < aboutTabs.length; tabId++){
        aboutTabs[tabId].classList.remove('active');
    }
    // добавление активного класса
    aboutTabs[id].classList.add('active');
}

// добавление функции на клик кнопкам
for (let i = 0; i < aboutButtons.length; i++) {
    aboutButtons[i].onclick = function () {
        console.log('clicked ' + i);
        buttonToggle(i);
        tabToggle(i);
    }
}



