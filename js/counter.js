window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-action")) {
    const counterWrapper = event.target.closest(".counter-wrapper");
    const counter = counterWrapper.querySelector("[data-counter]");

    if (event.target.dataset.action === "plus") {
      counter.innerText = ++counter.innerText;
    } else if (event.target.dataset.action === "minus") {
      if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
      }
    }
  }
});
