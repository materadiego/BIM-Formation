var scrollCounterActive1 = document.querySelector("#box-number4");
var scrollCounterActive2 = document.querySelectorAll(".box-number2");

const counters = document.querySelectorAll(".counter");

async function getClass1() {
  let contained = await scrollCounterActive1.classList.contains("counter");
  if ((contained = true)) {
    counters.forEach((counter) => {
      counter.innerText = "0";

      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target / 200;

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)} `;
          setTimeout(updateCounter, 50);
        }
      };
      updateCounter();
    });
  }
}

const counters2 = document.querySelectorAll(".counter2");

counters2.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)} `;
      setTimeout(updateCounter, 20);
    }
  };
  updateCounter();
});
