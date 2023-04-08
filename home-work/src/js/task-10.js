function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  container: document.querySelector("#boxes"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  quantityOfBoxes: document.querySelector('[type="number"]'),
};

console.log(refs.quantityOfBoxes);

refs.createBtn.addEventListener("click", onCreateBoxes);
refs.destroyBtn.addEventListener("click", onDestroyBoxes);

function onDestroyBoxes() {
  refs.container.innerHTML = "";
}
function onCreateBoxes() {
  const amount = refs.quantityOfBoxes.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const firstSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    let currentSize = i * 10 + firstSize;
    const box = document.createElement("div");
    box.style.width = `${currentSize}px`;
    box.style.height = `${currentSize}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    fragment.append(box);
  }
  refs.container.append(fragment);
}

// box = document.createElement("div");
// box.style.backgroundColor = getRandomHexColor();
// box.style.width = `${sizeOfBox}px`;
// box.style.height = `${sizeOfBox}px`;
// sizeOfBox += 10;

// refs.container.append(...markup);
