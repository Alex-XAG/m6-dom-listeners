function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  colorText: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener("click", onCangeColor);

console.log(document.body);

function onCangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.colorText.textContent = document.body.style.backgroundColor;
}
