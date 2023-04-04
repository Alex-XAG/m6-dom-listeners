// Create and append collection

const coloPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CaF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

// Write a function for creating markup of color-picker

// const option = coloPickerOptions[0];

// const buttonEl = document.createElement("button");
// buttonEl.type = "button";
// buttonEl.textContent = option.label;

const colorPickerContainerEl = document.querySelector(".js-color-picker");

// ///////// Old school decision //////////////

// const elements = [];
// for (let i = 0; i < coloPickerOptions.length; i += 1) {
//   const element = coloPickerOptions[i];

//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.classList.add("color-picker__option");
//   buttonEl.textContent = element.label;
//   buttonEl.style.backgroundColor = element.color;

//   elements.push(buttonEl);
// }

// console.log(elements);

// colorPickerContainerEl.append(...elements);

// ///////////// normal decision  map() ////////

// const elements = coloPickerOptions.map(option => {
//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.classList.add("color-picker__option");
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// });

// colorPickerContainerEl.append(...elements);

// /////////// Functionally decision ///////////////

const makeColorPisckerOptions = options => {
  return options.map(option => {
    const buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.classList.add("color-picker__option");
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;

    return buttonEl;
  });
};

const elementsFn = makeColorPisckerOptions(coloPickerOptions);
colorPickerContainerEl.append(...elementsFn);
