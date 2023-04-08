const refs = {
  form: document.querySelector(".login-form"),
  inputEmail: document.querySelector('[name="email"]'),
  inputPassword: document.querySelector('[name="password"]'),
};

console.log(refs.inputEmail);

console.log(refs.form.elements.email.value);

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  console.dir(event.currentTarget);

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (refs.inputEmail.value === "" || refs.inputPassword.value === "") {
    return alert("fill in all fields of the form please!!!");
  }

  console.log({ email: email.value, password: password.value });

  event.currentTarget.reset();
}
