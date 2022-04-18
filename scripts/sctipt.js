const dde = document.documentElement;
const promoNextBtn = document.querySelector(".promo__next-btn");
const orderForm = document.forms.order;

controlPromoBtnText();

window.addEventListener("resize", controlPromoBtnText);

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

function controlPromoBtnText() {
  promoNextBtn.textContent = dde.clientWidth < 576 ? "Оформить заказ" : "Далее";
}
