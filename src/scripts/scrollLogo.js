// Получаем ссылку на элемент SVG
const logo = document.querySelector('.logo');

// Обработчик события прокрутки страницы
window.addEventListener('scroll', function() {
  // Определяем высоту прокрутки
  const scrolled = window.scrollY;
  // Определяем высоту блока с контентом
  const contentHeight = document.querySelector('.header_images').offsetHeight;
  // Определяем процент прокрутки относительно высоты контента
  const scrollPercentage = (scrolled / contentHeight) * 100;

  // Применяем вращение логотипа в зависимости от процента прокрутки
//   logo.style.transform = rotate(${scrollPercentage * 3.6}deg);
  logo.style.transform = "rotate(" + (scrollPercentage * 3.6) + "deg)";
});