//  - Event submit
// - Default actions of browzer
// - Property elements
// - class FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData

const form = document.querySelector(".js-register-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  console.log(formData); // {}

  formData.forEach((value, name) => {
    console.log("onFormSubmit -> value", value);
    console.log("onFormSubmit -> name", name);
  });

  //   const formElements = event.currentTarget.elements;

  //   console.dir(formElements);

  //   const mail = formElements.email.value;
  //   const password = formElements.password.value;
  //   const subscription = formElements.subscription.value;

  //   const formData = { mail, password, subscription };

  //   console.log(formData);

  //   console.log("This is submit of form");
}
