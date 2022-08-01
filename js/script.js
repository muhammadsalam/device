// Обработка клика на кнопку каталога в шапке
let headerCatalogBtn = document.querySelector('.js-header-catalog');
headerCatalogBtn.addEventListener('click', (e) => e.target.classList.toggle('active'))