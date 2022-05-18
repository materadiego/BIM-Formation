window.addEventListener("scroll", function () {
  var animado = document.querySelectorAll(".animado");

  for (var i = 0; i < animado.length; i++) {
    var altura = window.innerHeight / 1.5;

    var distancia = animado[i].getBoundingClientRect().top;

    if (distancia <= altura) {
      animado[i].classList.remove(
        "scroll-two-title",
        "scroll-two-title-image",
        "scroll-two-container2",
        "scroll-two-container2-arrow",
        "scroll-two-figure-image",
        "scroll-three",
        "scroll-three-arrow",
        "scroll-four"
        // "scroll-three-box1",
        // "scroll-three-box2",
        // "scroll-three-box3",
        // "scroll-three-box4"
      );
    }
  }
});
