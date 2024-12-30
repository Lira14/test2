// Кнопки и контейнеры
const btns = document.querySelectorAll('.season-btn');
const months = document.querySelector('.months');
const main = document.querySelector('.container');
const imageContainer = document.createElement('div');
imageContainer.className = 'season-image';
main.appendChild(imageContainer);

// Функция показа месяцев и картинки
function showSeason(season) {
    // Очищаем предыдущие месяцы
    months.innerHTML = '';

    // Настройки для каждого сезона
    switch(season) {
        case 'winter':
            main.style.background = '#f1f1f1';
            createMonths(['Декабрь', 'Январь', 'Февраль'], '#a8d0e6');
            showImage('./images/winter.jpg', 'Зима');
            break;

        case 'spring':
            main.style.background = '#e8f5e9';
            createMonths(['Март', 'Апрель', 'Май'], '#95e1d3');
            showImage('./images/spring.jpg', 'Весна');
            break;

        case 'summer':
            main.style.background = '#fff3e0';
            createMonths(['Июнь', 'Июль', 'Август'], '#f8b195');
            showImage('./images/summer.jpg', 'Лето');
            break;

        case 'autumn':
            main.style.background = '#fbe9e7';
            createMonths(['Сентябрь', 'Октябрь', 'Ноябрь'], '#d35400');
            showImage('./images/autumn.jpg', 'Осень');
            break;
    }
}

// Создаем месяцы
function createMonths(monthsList, color) {
    monthsList.forEach(month => {
        let div = document.createElement('div');
        div.className = 'month';
        div.style.background = color;
        div.textContent = month;
        months.appendChild(div);
    });
}

// Показываем картинку
function showImage(src, alt) {
    imageContainer.innerHTML = `<img src="${src}" alt="${alt}">`;
}

// Клик по кнопкам
btns.forEach(btn => {
    btn.onclick = () => {
        let season = btn.classList[1];
        showSeason(season);
    }
});

// Показываем зиму при загрузке
showSeason('winter');




