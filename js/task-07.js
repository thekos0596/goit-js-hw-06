const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("change", changeSizeOfText);

function changeSizeOfText(event) {
  spanEl.style.fontSize = inputEl.value + "px";
}
