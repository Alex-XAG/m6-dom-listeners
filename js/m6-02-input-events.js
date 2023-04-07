//  Pattern "Object of links"

// Events
// - focus and blur
// - Checkboxes and property checked

const refs = {
  input: document.querySelector(".js-input"),
  nameLabel: document.querySelector(".js-button > span"),
  licenseCheckbox: document.querySelector(".js-license"),
  btn: document.querySelector(".js-button"),
};

// const input = document.querySelector(".js-button");
// const nameLabel = document.querySelector(".js-button > span");
// const license = document.querySelector(".js-license");
// const btn = document.querySelector(".js-button");

// refs.input.addEventListener("focus", onInputFocus);
// refs.input.addEventListener("blur", onInputBlur);

// refs.input.addEventListener("change", onInputChange); /// Only for radio-buttons snd checkboxes

refs.input.addEventListener("input", onInputChange); // input event
refs.licenseCheckbox.addEventListener("change", onLicenseChange);

function onInputFocus() {
  console.log("Input was focused - event focus");
}

function onInputBlur() {
  console.log("Input lost focus - event blur");
}

function onInputChange(event) {
  // console.log(event);
  // console.log(event.currentTarget.value);

  refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  // console.log("changed");
  console.log(event.currentTarget.checked);

  refs.btn.disabled = !event.currentTarget.checked;
}
