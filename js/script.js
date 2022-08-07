// Обработка клика на кнопку каталога в шапке
const headerCatalogBtn = document.querySelector('.js-header-catalog');
headerCatalogBtn.addEventListener('click', (e) => e.target.classList.toggle('active'))

// слайдер
const popularSlider = new Swiper('.popular-inner', {
    allowTouchMove: true,
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