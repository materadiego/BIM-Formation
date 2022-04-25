const subBoxButton1 = document.querySelector("#project-button");
const subBoxButton2 = document.querySelector("#modules-button");
const subBoxButton3 = document.querySelector("#videos-button");
const subBoxButton4 = document.querySelector("#hours-button");
const module1 = document.querySelector(".project-subcont");
const module2 = document.querySelector(".modules-subcont");
const module3 = document.querySelector(".videos-subcont");
const module4 = document.querySelector(".hours-subcont");
const boxProyecto = document.querySelector(".proyecto");
const boxModule = document.querySelector(".modulos");
const boxVideo = document.querySelector(".videos");
const boxHoras = document.querySelector(".horas");
const lineOneb1 = document.querySelector(".line-one-b1");
const lineTwob1 = document.querySelector(".line-two-b1");
const lineOneb2 = document.querySelector(".line-one-b2");
const lineTwob2 = document.querySelector(".line-two-b2");
const lineOneb3 = document.querySelector(".line-one-b3");
const lineTwob3 = document.querySelector(".line-two-b3");
const lineOneb4 = document.querySelector(".line-one-b4");
const lineTwob4 = document.querySelector(".line-two-b4");
const fiveContainer = document.querySelector(".five-container");

function showProject() {
  if (boxProyecto.classList.contains("project-box-active")) {
    boxProyecto.classList.remove("project-box-active");
    module1.classList.remove("subcont-is-active");
    lineOneb1.classList.remove("line1-active");
    lineTwob1.classList.remove("line2-active");
    fiveContainer.classList.remove("five-container-module-active");
  } else {
    boxProyecto.classList.add("project-box-active");
    lineOneb1.classList.add("line1-active");
    lineTwob1.classList.add("line2-active");
    module1.classList.add("subcont-is-active");
    module2.classList.remove("subcont-is-active");
    module3.classList.remove("subcont-is-active");
    module4.classList.remove("subcont-is-active");
    boxModule.classList.remove("module-box-active");
    boxVideo.classList.remove("video-box-active");
    boxHoras.classList.remove("hours-box-active");
    lineOneb2.classList.remove("line1-active");
    lineTwob2.classList.remove("line2-active");
    lineOneb3.classList.remove("line1-active");
    lineTwob3.classList.remove("line2-active");
    lineOneb4.classList.remove("line1-active");
    lineTwob4.classList.remove("line2-active");
    fiveContainer.classList.add("five-container-module-active");
  }
}

function showModules() {
  if (boxModule.classList.contains("module-box-active")) {
    boxModule.classList.remove("module-box-active");
    module2.classList.remove("subcont-is-active");
    lineOneb2.classList.remove("line1-active");
    lineTwob2.classList.remove("line2-active");
    fiveContainer.classList.remove("five-container-module-active");
  } else {
    boxModule.classList.add("module-box-active");
    module2.classList.add("subcont-is-active");
    lineOneb2.classList.add("line1-active");
    lineTwob2.classList.add("line2-active");
    module1.classList.remove("subcont-is-active");
    module3.classList.remove("subcont-is-active");
    module4.classList.remove("subcont-is-active");
    boxProyecto.classList.remove("project-box-active");
    boxVideo.classList.remove("video-box-active");
    boxHoras.classList.remove("hours-box-active");
    lineOneb1.classList.remove("line1-active");
    lineTwob1.classList.remove("line2-active");
    lineOneb3.classList.remove("line1-active");
    lineTwob3.classList.remove("line2-active");
    lineOneb4.classList.remove("line1-active");
    lineTwob4.classList.remove("line2-active");
    fiveContainer.classList.add("five-container-module-active");
  }
}

function showVideos() {
  if (boxVideo.classList.contains("video-box-active")) {
    boxVideo.classList.remove("video-box-active");
    module3.classList.remove("subcont-is-active");
    lineOneb3.classList.remove("line1-active");
    lineTwob3.classList.remove("line2-active");
    fiveContainer.classList.remove("five-container-module-active");
  } else {
    boxVideo.classList.add("video-box-active");
    module3.classList.add("subcont-is-active");
    lineOneb3.classList.add("line1-active");
    lineTwob3.classList.add("line2-active");
    module1.classList.remove("subcont-is-active");
    module2.classList.remove("subcont-is-active");
    module4.classList.remove("subcont-is-active");
    boxProyecto.classList.remove("project-box-active");
    boxModule.classList.remove("module-box-active");
    boxHoras.classList.remove("hours-box-active");
    lineOneb2.classList.remove("line1-active");
    lineTwob2.classList.remove("line2-active");
    lineOneb1.classList.remove("line1-active");
    lineTwob1.classList.remove("line2-active");
    lineOneb4.classList.remove("line1-active");
    lineTwob4.classList.remove("line2-active");
    fiveContainer.classList.add("five-container-module-active");
  }
}

function showHours() {
  if (boxHoras.classList.contains("hours-box-active")) {
    boxHoras.classList.remove("hours-box-active");
    module4.classList.remove("subcont-is-active");
    lineOneb4.classList.remove("line1-active");
    lineTwob4.classList.remove("line2-active");
    fiveContainer.classList.remove("five-container-module-active");
  } else {
    boxHoras.classList.add("hours-box-active");
    module4.classList.add("subcont-is-active");
    lineOneb4.classList.add("line1-active");
    lineTwob4.classList.add("line2-active");
    module1.classList.remove("subcont-is-active");
    module2.classList.remove("subcont-is-active");
    module3.classList.remove("subcont-is-active");
    boxProyecto.classList.remove("project-box-active");
    boxModule.classList.remove("module-box-active");
    boxVideo.classList.remove("video-box-active");
    lineOneb2.classList.remove("line1-active");
    lineTwob2.classList.remove("line2-active");
    lineOneb3.classList.remove("line1-active");
    lineTwob3.classList.remove("line2-active");
    lineOneb1.classList.remove("line1-active");
    lineTwob1.classList.remove("line2-active");
    fiveContainer.classList.add("five-container-module-active");
  }
}

subBoxButton1.addEventListener("click", showProject);
subBoxButton2.addEventListener("click", showModules);
subBoxButton3.addEventListener("click", showVideos);
subBoxButton4.addEventListener("click", showHours);

const moduleContainer1 = document.querySelector(".module-container-1");
const moduleContainer2 = document.querySelector(".module-container-2");
const moduleContainer3 = document.querySelector(".module-container-3");
const moduleContainer4 = document.querySelector(".module-container-4");
const moduleButton1 = document.querySelector("#modulo1");
const moduleButton2 = document.querySelector("#modulo2");
const moduleButton3 = document.querySelector("#modulo3");
const moduleButton4 = document.querySelector("#modulo4");
const moduleSpan1 = document.querySelector(".module-span1");
const moduleSpan2 = document.querySelector(".module-span2");
const moduleSpan3 = document.querySelector(".module-span3");
const moduleSpan4 = document.querySelector(".module-span4");

function showModule1() {
  if (moduleContainer1.classList.contains("module-container-active")) {
  } else {
    moduleContainer1.classList.add("module-container-active");
    moduleButton1.classList.add("module-active");
    moduleSpan1.classList.add("module-active-span");
    moduleContainer2.classList.remove("module-container-active");
    moduleContainer4.classList.remove("module-container-active");
    moduleContainer3.classList.remove("module-container-active");
    moduleButton2.classList.remove("module-active");
    moduleButton4.classList.remove("module-active");
    moduleButton3.classList.remove("module-active");
    moduleSpan2.classList.remove("module-active-span");
    moduleSpan3.classList.remove("module-active-span");
    moduleSpan4.classList.remove("module-active-span");
  }
}

function showModule2() {
  if (moduleContainer2.classList.contains("module-container-active")) {
  } else {
    moduleContainer2.classList.add("module-container-active");
    moduleButton2.classList.add("module-active");
    moduleSpan2.classList.add("module-active-span");

    moduleContainer1.classList.remove("module-container-active");
    moduleContainer4.classList.remove("module-container-active");
    moduleContainer3.classList.remove("module-container-active");
    moduleButton1.classList.remove("module-active");
    moduleButton4.classList.remove("module-active");
    moduleButton3.classList.remove("module-active");
    moduleSpan1.classList.remove("module-active-span");
    moduleSpan3.classList.remove("module-active-span");
    moduleSpan4.classList.remove("module-active-span");
  }
}

function showModule3() {
  if (moduleContainer3.classList.contains("module-container-active")) {
  } else {
    moduleContainer3.classList.add("module-container-active");
    moduleButton3.classList.add("module-active");
    moduleSpan3.classList.add("module-active-span");

    moduleContainer1.classList.remove("module-container-active");
    moduleContainer4.classList.remove("module-container-active");
    moduleContainer2.classList.remove("module-container-active");
    moduleButton2.classList.remove("module-active");
    moduleButton4.classList.remove("module-active");
    moduleButton1.classList.remove("module-active");
    moduleSpan1.classList.remove("module-active-span");
    moduleSpan2.classList.remove("module-active-span");
    moduleSpan4.classList.remove("module-active-span");
  }
}

function showModule4() {
  if (moduleContainer4.classList.contains("module-container-active")) {
  } else {
    moduleContainer4.classList.add("module-container-active");
    moduleButton4.classList.add("module-active");
    moduleSpan4.classList.add("module-active-span");

    moduleContainer2.classList.remove("module-container-active");
    moduleContainer1.classList.remove("module-container-active");
    moduleContainer3.classList.remove("module-container-active");
    moduleButton2.classList.remove("module-active");
    moduleButton1.classList.remove("module-active");
    moduleButton3.classList.remove("module-active");
    moduleSpan1.classList.remove("module-active-span");
    moduleSpan2.classList.remove("module-active-span");
    moduleSpan3.classList.remove("module-active-span");
  }
}

moduleButton1.addEventListener("click", showModule1);
moduleButton2.addEventListener("click", showModule2);
moduleButton3.addEventListener("click", showModule3);
moduleButton4.addEventListener("click", showModule4);
