const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// console.log(ingredients[0]);
const elements = ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  console.log(item);
  return item;
});

const ingredientsList = document.querySelector("#ingredients");

ingredientsList.append(...elements);
