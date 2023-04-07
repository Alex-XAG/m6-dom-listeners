// Mouse events
// - mouseenter and mouseleave (hover);
// - mouseover and mouseout
// - mousemove (chaty event);
// good task - https://learn.javascript.ru/task/move-ball-field

const boxRef = document.querySelector(".js-box");

// boxRef.addEventListener("mouseenter", onMouseEnter);
// boxRef.addEventListener("mouseleave", onMouseLeave);
// boxRef.addEventListener("mouseover", onMouseEnter);
// boxRef.addEventListener("mouseout", onMouseLeave);
boxRef.addEventListener("mousemove", onMouseMove);

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add("box--active");
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove("box--active");
}

function onMouseMove(event) {
  //   console.log(event);
}
