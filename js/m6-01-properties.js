const magicBtn = document.querySelector(".js-magic-btn");

// magicBtn.addEventListener("click", () => {
//   const imageEl = document.querySelector(".hero__img");
//   console.log(imageEl);
//   console.log(imageEl.src);

//   imageEl.src = "../94c56e15f13f1de4740a76742b0b594f.jpeg";
//   imageEl.alt = "it's a new image";
// });

const imageEl = document.querySelector(".hero__img");
// console.log(imageEl);
// console.log(imageEl.src);

imageEl.src = "../94c56e15f13f1de4740a76742b0b594f.jpeg";
imageEl.alt = "it's a new image";

const heroTitleEl = document.querySelector(".hero__title");
// console.log(heroTitleEl);

// console.log(heroTitleEl.textContent);
heroTitleEl.textContent = "I am good man!!!";

// /////// Atributes ///////////////////

// - get(name of atribute)
// - set(name of atribute)
// - remove(name of atribute)
// - has(name of atribute)

// console.log(imageEl.getAttribute("src"));
// console.log(imageEl.src); /// Тоже самое что и метод на 32 строке

// console.log(imageEl.hasAttribute("src"));
// console.log(imageEl.removeAttribute("src"));

// /////// data-attributes /////////////

const actions = document.querySelectorAll(".js-actions button");
// console.log(actions); // NodeList(3) [button, button, button]
// console.log(actions[0]);
// console.log(actions[0].dataset); // DOMStringMap {action: 'add'}
// console.log(actions[0].dataset.action); // add
// console.log(actions[1].dataset.action); // remove
console.log(actions[2].dataset.action); // edit
console.log(actions[2].getAttribute("data-action")); // edit

// magicBtn.addEventListener("click", () => {
//   const inputEl = document.querySelector(".js-input");
//   console.log(inputEl.value);
//   inputEl.value = "lskdfhksdnv";
// });
