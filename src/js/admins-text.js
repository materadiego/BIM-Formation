const textRafael = document.querySelector(".text-rafael");
const textMelissa = document.querySelector(".text-melissa");
const saberMasR = document.querySelector("#saber-mas-r");
const saberMasM = document.querySelector("#saber-mas-m");
const saberMasFlechaR = document.querySelector(".saber-mas-flecha-r");
const saberMasFlechaM = document.querySelector(".saber-mas-flecha-m");

function desplegarTextoR() {
  if (textRafael.classList.contains("show-text")) {
    textRafael.classList.remove("show-text");
    saberMasFlechaR.classList.remove("saber-mas-active");
  } else {
    textRafael.classList.add("show-text");
    saberMasFlechaR.classList.add("saber-mas-active");
  }
}

function desplegarTextoM() {
  if (textMelissa.classList.contains("show-text")) {
    textMelissa.classList.remove("show-text");
    saberMasFlechaM.classList.remove("saber-mas-active");
  } else {
    textMelissa.classList.add("show-text");
    saberMasFlechaM.classList.add("saber-mas-active");
  }
}

saberMasR.addEventListener("click", desplegarTextoR);
saberMasM.addEventListener("click", desplegarTextoM);
