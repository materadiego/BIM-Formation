const $form = document.querySelector("#form");
const $form2 = document.querySelector("#form2");

const $headerForm = document.querySelector("#header-form");
const $regaloForm = document.querySelector("#regalo-form");

const d = document;

$form.addEventListener("submit", handleSumbit);
$form2.addEventListener("submit", handleSumbit);

$headerForm.addEventListener("submit", handleSumbit2);
$regaloForm.addEventListener("submit", handleSumbit2);

function handleSumbit(event) {
  event.preventDefault();
  const $resp = d.querySelector("#response");
  const $resp2 = d.querySelector("#response2");

  const $contactLoader = d.querySelector("#contact-loader");
  const $contactLoader2 = d.querySelector("#contact-loader2");

  $contactLoader.classList.remove("none");
  $contactLoader2.classList.remove("none");

  fetch("https://formsubmit.co/ajax/cc5566c6947d7f6c5bf0241e813c4926", {
    method: "POST",
    body: new FormData(event.target),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      $contactLoader.classList.add("none");
      $contactLoader2.classList.add("none");
      $resp.classList.remove("none");
      $resp2.classList.remove("none");
      $form.reset();
      $form2.reset();
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleSumbit2(event) {
  event.preventDefault();

  fetch("https://formsubmit.co/ajax/cc5566c6947d7f6c5bf0241e813c4926", {
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
