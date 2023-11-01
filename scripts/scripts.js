let buttonAdultsQuantityMinus = document.querySelector(".button-adults-quantity-minus");
let buttonAdultsQuantityPlus = document.querySelector(".button-adults-quantity-plus");
let formSearchInputAdults = document.querySelector(".form-search__input-adults");

let buttonChildrenQuantityMinus = document.querySelector(".button-children-quantity-minus");
let buttonChildrenQuantityPlus = document.querySelector(".button-children-quantity-plus");
let formSearchInputChildren = document.querySelector(".form-search__input-children");

let mainHeaderButton = document.querySelector(".main-header__button");
let modalContainer = document.querySelector(".modal-container");
let modalSearchButtonClose = document.querySelector(".modal-search__button-close");




buttonAdultsQuantityMinus.onclick = function() {
  if (formSearchInputAdults.value !== "0" & formSearchInputAdults.value !== "") {
    formSearchInputAdults.value = +formSearchInputAdults.value - 1;
  }
}
buttonAdultsQuantityPlus.onclick = function() {
  formSearchInputAdults.value = +formSearchInputAdults.value + 1;
}

buttonChildrenQuantityMinus.onclick = function() {
  if (formSearchInputChildren.value !== "0" & formSearchInputChildren.value !== "") {
    formSearchInputChildren.value = +formSearchInputChildren.value - 1;
  }
}
buttonChildrenQuantityPlus.onclick = function() {
  formSearchInputChildren.value = +formSearchInputChildren.value + 1;
}

mainHeaderButton.onclick = function() {
  modalContainer.classList.remove("modal-container-close");
  window.onscroll = () => { window.scroll(0, 0); };
}

modalSearchButtonClose.onclick = function() {
  modalContainer.classList.add("modal-container-close");
  window.onscroll = () => { window.scroll(); };
}

document.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.classList.add("modal-container-close");
    window.onscroll = () => { window.scroll(); };
  }
});
