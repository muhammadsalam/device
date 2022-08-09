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


// обработка табов в блоке .services
// кнопки и табы
const servicesButtons = document.querySelectorAll('.services-buttons__item');
const servicesTabs = document.querySelectorAll('.services-tab');
console.log(servicesButtons)
// переназначение класса active для кнопок
function buttonToggle(id){
    // удаление активного класса
    for(let buttonId = 0; buttonId < servicesButtons.length; buttonId++){
        servicesButtons[buttonId].classList.remove('active');
    }
    // добавление активного класса
    servicesButtons[id].classList.add('active');
}

// переназначение класса active для табов
function tabToggle(id){
    // удаление активного класса
    for(let tabId = 0; tabId < servicesTabs.length; tabId++){
        servicesTabs[tabId].classList.remove('active');
    }
    // добавление активного класса
    servicesTabs[id].classList.add('active');
}

// добавление функции на клик кнопкам
for (let i = 0; i < servicesButtons.length; i++) {
    servicesButtons[i].onclick = function () {
        console.log('clicked ' + i);
        buttonToggle(i);
        tabToggle(i);
    }
}


// слайдер с логотипами компаний
const companiesSlider = new Swiper('.companies-inner', {
    slideActiveClass: 'companies-slider__item--active',
    allowTouchMove: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    autoplay: {
        delay: 2000
    }
});