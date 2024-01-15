// Получаем элементы
const timeText = document.querySelector('.time_text');
const bookText = document.querySelector('.book_text');
const coneText = document.querySelector('.cone_text');
const courseText = document.querySelector('.course_text');

// Здесь мы будем хранить тексты, которые будут заменять другие
const texts = [
    timeText.textContent,
    bookText.textContent,
    coneText.textContent
];

let index = 0; // Индекс текущего текста из массива texts

// Функция для замены текста
function changeText() {
    if (index < texts.length) {
        // Плавно скрываем предыдущий текст
        if (index > 0) {
            document.querySelectorAll('.time_text')[index].style.opacity = '0';
            document.querySelectorAll('.book_text')[index].style.opacity = '0';
            document.querySelectorAll('.cone_text')[index].style.opacity = '0';
        }
        // Через 1 секунду плавно показываем новый текст
        setTimeout(function () {
            document.querySelectorAll('.course_text')[index].style.opacity = '1';
            document.querySelectorAll('.course_text')[index].textContent = texts[index];
            index++;
        }, 1000);
    } else {
        // Показываем course_text
        courseText.classList.add('show');
    }
}

// Вызываем функцию changeText каждые 2 секунды
setInterval(changeText, 2000);
