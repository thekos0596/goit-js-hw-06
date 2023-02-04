const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const listArr = ingredients.map((ingredient) => {
  const item = document.createElement("li");

  item.setAttribute("class", "item");
  item.textContent = ingredient;

  return item;
});
list.append(...listArr);
