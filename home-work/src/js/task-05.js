const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value !== "" && event.currentTarget.value !== " ") {
    nameOutput.textContent = event.currentTarget.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
}
