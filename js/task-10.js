function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValue = document.querySelector("input");
const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const newBoxesContainer = document.querySelector("#boxes");

const createBoxes = (amount) => {
  amount = inputValue.value;
  for (let i = 1; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = 20 + i * 10 + "px";
    newBox.style.height = 20 + i * 10 + "px";
    newBox.style.backgroundColor = getRandomHexColor();
    newBoxesContainer.insertAdjacentElement("beforeend", newBox);
  }
};

const clearBox = () => newBoxesContainer.replaceChildren();

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", clearBox);
