window.addEventListener("scroll", function () {
  var animado = document.querySelectorAll(".animado");
  //var scrollCounter = document.querySelectorAll(".box-number1");
  //var scrollCounter2 = document.querySelectorAll(".box-number2");

  for (let i = 0; i < animado.length; i++) {
    let altura = window.innerHeight / 1.5;

    let distancia = animado[i].getBoundingClientRect().top;

    if (distancia <= altura) {
      animado[i].classList.remove(
        "scroll-two-title",
        "scroll-two-title-image",
        "scroll-two-container2",
        "scroll-two-container2-arrow",
        "scroll-two-figure-image",
        "scroll-three",
        "scroll-three-arrow",
        "scroll-four",
        "scroll-six",
        "scroll-seven",
        "scroll-chat"

        // "scroll-three-box1",
        // "scroll-three-box2",
        // "scroll-three-box3",
        // "scroll-three-box4"
      );
    }
  }
});
//   for (var i = 0; i < scrollCounter.length; i++) {
//     var altura = window.innerHeight / 1.5;

//     let distancia = scrollCounter[i].getBoundingClientRect().top;

//     if (distancia <= altura) {
//       // scrollCounter[i].classList.add("counter");
//     }
//   }

//   for (var i = 0; i < scrollCounter2.length; i++) {
//     var altura = window.innerHeight / 1.5;

//     var distancia = scrollCounter2[i].getBoundingClientRect().top;

//     if (distancia <= altura) {
//       scrollCounter2[i].classList.add("counter2");
//     }
//   }
// });
