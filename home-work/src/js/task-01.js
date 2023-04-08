const categories = document.querySelector("#categories");
const catItems = categories.querySelectorAll("li.item");
console.log(`Number of categories: ${catItems.length}`);

catItems.forEach(item => {
  const elements = item.querySelectorAll("li");
  const titleItem = item.querySelector("h2");

  console.log(`Category: ${titleItem.textContent}
  Elements: ${elements.length}`);
});
// console.log(result);
