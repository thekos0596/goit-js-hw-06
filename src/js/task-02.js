const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
// console.log(list);
ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.setAttribute("class", "item");
  item.textContent = ingredient;
  // console.log(item);
  list.append(item);
});
