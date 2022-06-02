const $form = document.querySelector("#form");
const $headerForm = document.querySelector("#header-form");
const $regaloForm = document.querySelector("#regalo-form");

const d = document;

$form.addEventListener("submit", handleSumbit);
$headerForm.addEventListener("submit", handleSumbit2);
$regaloForm.addEventListener("submit", handleSumbit2);

function handleSumbit(event) {
  event.preventDefault();
  const $resp = d.querySelector("#response");
  const $contactLoader = d.querySelector("#contact-loader");

  $contactLoader.classList.remove("none");

  fetch("https://formsubmit.co/ajax/rafaxerez94@gmail.com", {
    method: "POST",
    body: new FormData(event.target),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      $contactLoader.classList.add("none");
      $resp.classList.remove("none");
      $form.reset();
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleSumbit2(event) {
  event.preventDefault();

  fetch("https://formsubmit.co/ajax/rafaxerez94@gmail.com", {
    method: "POST",
    body: new FormData(event.target),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      window.open("https://bimformation.club.hotmart.com/login", "_self");
    })

    .catch((err) => {
      console.log(err);
    });
}
