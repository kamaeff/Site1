const langCurrent = document.querySelector('.list__item--active');
const languages = document.querySelectorAll('.list__item');
const take = document.querySelector('.list__take');

// Попробуйте её самостоятельно разобрать
const siblings = el => [].slice.call(el.parentNode.children).filter(child => (child !== el)); // объявляем функцию, которая будет возвращать соседние элементы

languages.forEach(lang => {
    lang.addEventListener('click', (evt) => {
        evt.preventDefault();
        if (lang.classList.contains('list__item--active')) {
            siblings(lang).forEach(el => { // для каждого соседнего элемента
                el.classList.add('list__item--show') // добавляем класс для показа
            })
        } else {
            lang.classList.add('list__item--active'); // добавляем класс активности
            lang.classList.remove('list__item--show'); // удаляем класс для показа
            

            siblings(lang).forEach(el => {
                el.classList.remove('list__item--active');
                el.classList.remove('list__item--show');
            })
        }

    });

});

const sandwichmenu = document.querySelector('#btn');
const js_menu = document.querySelector('.js_menu');

sandwichmenu.addEventListener('click', function(e) {
  e.preventDefault();
  sandwichmenu.classList.toggle('active');
  js_menu.classList.toggle('active');
});