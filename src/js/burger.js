const burgerButton = document.querySelector("#burger-button");
const menu = document.querySelector(".header");

function hideShow() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
  }
}

burgerButton.addEventListener("click", hideShow);
