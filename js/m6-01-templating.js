// Property innerHTML
// - Reading
// - Writing

const titleEl = document.querySelector(".title");

// console.log(titleEl.textContent); // This is title
// console.log(titleEl.innerHTML); // This is <span>title</span>

// titleEl.innerHTML = "<a href=''>This is link</a>";

// titleEl.innerHTML = "";

//  //////  Inserting of markup by insertAdjecentHTML() ////////////

titleEl.insertAdjacentHTML("beforeend", "<a href=''>This is link</a>");
