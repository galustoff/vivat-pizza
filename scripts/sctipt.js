const dde = document.documentElement;
const promoNextBtn = document.querySelector(".promo__submit-btn");
const orderForm = document.forms.order;
const popup = document.querySelector(".popup");
const popupForm = popup.querySelector(".popup__form");

controlPromoBtnText();

window.addEventListener("resize", controlPromoBtnText);

popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    popup.classList.add("popup_closed");
  }
});

popupForm.addEventListener("submit", (e) => {
  e.preventDefault();
})

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  popup.classList.remove("popup_closed");
});

function controlPromoBtnText() {
  promoNextBtn.textContent = dde.clientWidth < 576 ? "Оформить заказ" : "Далее";
}
