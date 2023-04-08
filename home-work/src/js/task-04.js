const refs = {
  value: document.querySelector("#value"),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};
let counterValue = 0;

refs.decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
});

refs.incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
});
