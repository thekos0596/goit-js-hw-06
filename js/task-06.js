const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", lostFocus);

function lostFocus() {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
  } else if (inputEl.value.length !== Number(inputEl.dataset.length)) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
