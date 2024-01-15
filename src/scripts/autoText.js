const autoText = document.querySelector(".auto_text");

// Начальное значение сдвига текста
let translateY = 0;

const animationInterval = setInterval(scrollText, 5);
// Скорость анимации. Чем меньше значение, тем быстрее прокрутка

function scrollText() {
    translateY += 1;
    autoText.style.transform = "translateY(" + translateY + "px)";

    // Если текст прокрутился до конца, возвращаем его в начало
    if (Math.abs(translateY) >= autoText.scrollHeight) {
        translateY = 0;
    }
}
