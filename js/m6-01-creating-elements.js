//////////////// appendChild(), insertBefore(), append(...elements), preppend(...elements)

// Creating title

const titleEl = document.createElement("h1");
titleEl.classList.add("page-title");
titleEl.textContent = "This is title of page";
// console.log(titleEl);

// document.body.appendChild(titleEl); // example
// console.log(document.body);

/// creating of image

const imageEl = document.createElement("img");
imageEl.src = "../94c56e15f13f1de4740a76742b0b594f.jpeg";
imageEl.alt = "This is  created image";
imageEl.width = 320;

// document.body.appendChild(imageEl); // example

const heroEl = document.querySelector(".hero");
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl); // not good

heroEl.append(titleEl, imageEl); // better decision
// heroEl.preppend(titleEl, imageEl);

///////// We create and add new property of menu ///////

const navItemEl = document.createElement("li");
navItemEl.classList.add("qs__item");

const navLinkEl = document.createElement("a");
navLinkEl.classList.add("qs__link");
navLinkEl.textContent = "Privat cabinet";
navLinkEl.href = "/profile";

// console.log(navItemEl);
// console.log(navLinkEl);

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector(".qs-list");
console.log(navEl);

// navEl.appendChild(navItemEl);
// navEl.insertBefore(navItemEl, navEl.lastElementChild);
navEl.insertBefore(navItemEl, navEl.firstElementChild);
// navEl.insertBefore(navItemEl, navEl.children[1]);
