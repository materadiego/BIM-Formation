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
    saberMasR.classList.remove("saber-mas-active-color");
  } else {
    textRafael.classList.add("show-text");
    saberMasFlechaR.classList.add("saber-mas-active");
    saberMasR.classList.add("saber-mas-active-color");
  }
}

function desplegarTextoM() {
  if (textMelissa.classList.contains("show-text")) {
    textMelissa.classList.remove("show-text");
    saberMasFlechaM.classList.remove("saber-mas-active");
    saberMasM.classList.remove("saber-mas-active-color");
  } else {
    textMelissa.classList.add("show-text");
    saberMasFlechaM.classList.add("saber-mas-active");
    saberMasM.classList.add("saber-mas-active-color");
  }
}

saberMasR.addEventListener("click", desplegarTextoR);
saberMasM.addEventListener("click", desplegarTextoM);
