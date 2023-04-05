// Listeners
// - Creating and removing listeners
// - Naming callbacks for listeners
//   - handle*: handleEvent or handleSubjectEvent
//   - *Handler: eventHandler or subjectEventHandler
//   - on*: onEvent or onSubjectEvent
// - Linked identity of callbacks
// - Object of event

const targetBtn = document.querySelector(".js-target-button");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

// targetBtn.addEventListener("click", () => {
//   console.log("CLick");
// });

// - Linked identity of callbacks

addListenerBtn.addEventListener("click", event => {
  console.log(event);
  console.log("Вешаю слушателя события на целевую кнопку");

  targetBtn.addEventListener("click", onTargetBtnClick);
});

removeListenerBtn.addEventListener("click", event => {
  console.log(event);
  console.log("Снимаю слушателя события на целевую кнопку");

  targetBtn.removeEventListener("click", onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log(event);
  console.log("Click by target button!");
}

// - Naming callbacks for listeners

//   - handle*: handleEvent or handleSubjectEvent
// function handleTargetButtonClick() {
//   console.log("Click");
// }

// //   - *Handler: eventHandler or subjectEventHandler
// function targetButtonClickHandler() {
//   console.log("Click");
// }

// //   - on*: onEvent or onSubjectEvent
// function onTargetButtonClick() {
//   console.log("Click");
// }

function logMessage() {
  console.log("Click by target button!");
}
