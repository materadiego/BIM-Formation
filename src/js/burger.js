const burgerButton = document.querySelector("#burger-button");
const burgerButton2 = document.querySelector("#burger-button2");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".header");

function hideShow() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
    overlay.classList.remove("overlay-active");
  } else {
    menu.classList.add("is-active");
    overlay.classList.add("overlay-active");
  }
}

burgerButton.addEventListener("click", hideShow);
burgerButton2.addEventListener("click", hideShow);
