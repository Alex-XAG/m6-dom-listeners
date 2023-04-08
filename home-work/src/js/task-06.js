const input = document.querySelector("#validation-input");

// console.log(input.dataset.length);

input.addEventListener("blur", onInputValidation);

function onInputValidation(event) {
  const valueLength = event.currentTarget.value.length;
  const validLength = input.dataset.length;

  valueLength >= validLength
    ? input.classList.add("valid")
    : input.classList.add("invalid");
  //   if (valueLength >= validLength) {
  //     input.classList.add("valid");
  //   } else {
  //     input.classList.add("invalid");
  //   }
}
