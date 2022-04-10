const promoNextBtn = document.querySelector(".promo__next-btn");

controlPromoBtnText();

window.addEventListener('resize', controlPromoBtnText);

function controlPromoBtnText () {
  promoNextBtn.textContent = (document.documentElement.clientWidth < 576) ? "Оформить заказ" : "Далее";
}