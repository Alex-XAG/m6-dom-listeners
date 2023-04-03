const magicBtn = document.querySelector(".js-magic-btn");

//  Интерфейс classList
//  -  add(class)
// - remove(class)
// - toggle(class)
// - replace(oldClass, newClass)
// - contains(class)

// magicBtn.addEventListener("click", () => {
//   const navEl = document.querySelector(".qs-list");
//   console.log(navEl);
//   console.log(navEl.classList); // DOMTokenList ['qs-list', value: 'qs-list']

//   navEl.classList.add("super-cool");
// });

const currentPageURL = "/portfolio";
const linkEl = document.querySelector(`.qs__link[href="${currentPageURL}"]`);
console.log(linkEl);

linkEl.classList.add("qs__link--current");

// const navEl = document.querySelector(".qs-list");
// // console.log(navEl);
// // console.log(navEl.classList); // DOMTokenList ['qs-list', value: 'qs-list']

// navEl.classList.add("super-cool");
// navEl.classList.remove("qs-list");
// navEl.classList.replace("super-cool", "site-nav");
// console.log(navEl.classList.contains("site-nav"));

// magicBtn.addEventListener("click", () => {
//   navEl.classList.toggle("qwerty");
// });
