const windowWidth = document.documentElement.clientWidth;
const promoNextBtn = document.querySelector(".promo__next-btn");
const orderForm = document.forms.order;

controlPromoBtnText();

window.addEventListener('resize', controlPromoBtnText);

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
})

function controlPromoBtnText () {
  promoNextBtn.textContent = (windowWidth < 576) ? "Оформить заказ" : "Далее";
}