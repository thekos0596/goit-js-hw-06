const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
  if (inputName.value !== "") {
    outputName.textContent = event.currentTarget.value;
  } else {
    return (outputName.textContent = "Anonymous");
  }
});
