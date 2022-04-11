const windowWidth = document.documentElement.clientWidth;
const promoNextBtn = document.querySelector(".promo__next-btn");

controlPromoBtnText();

window.addEventListener('resize', controlPromoBtnText);

function controlPromoBtnText () {
  promoNextBtn.textContent = (windowWidth < 576) ? "Оформить заказ" : "Далее";
}