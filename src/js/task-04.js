const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const counterEl = document.querySelector("#value");
let counterValue = 0;

decrementBtn.addEventListener("click", onClickDecrementBtn);
incrementBtn.addEventListener("click", onClickIncrementBtn);

function onClickDecrementBtn() {
  counterValue -= 1;
  return addMarkup(counterValue);
}
function onClickIncrementBtn() {
  counterValue += 1;
  return addMarkup(counterValue);
}

function addMarkup(value) {
  return (counterEl.innerHTML = `${value}`);
}
