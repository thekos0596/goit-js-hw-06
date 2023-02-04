const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", lostFocus);

function lostFocus() {
  inputEl.classList.remove("valid", "invalid");
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
