const magicBtn = document.querySelector(".js-magic-btn");

magicBtn.addEventListener("click", () => {
  const navEl = document.querySelector(".qs-list");
  console.log(navEl);

  const navItemEl = document.querySelector(".qs-list__item");
  console.log(navItemEl); // first element finded

  const navLinksEl = document.querySelectorAll(".qs-list__link");
  console.log("navLinksEl", navLinksEl); // All elements finded
});

// const navEl = document.querySelector(".qs-list");
// console.log(navEl);

// const navItemEl = document.querySelector(".qs__list-item");
// console.log(navItemEl);

// const navLinksEl = document.querySelectorAll(".qs-list__link");
// console.log("navLinksEl", navLinksEl);
