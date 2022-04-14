const regaloX = document.querySelector("#regalo-close");
const regaloContainer = document.querySelector(".regalo");

function hideRegalo() {
  if (regaloContainer.classList.contains("regalo-is-active")) {
    regaloContainer.classList.remove("regalo-is-active");
  }
}

regaloX.addEventListener("click", hideRegalo);
