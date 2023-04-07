// 1. Open and close by button: onModalOpen and onModalClose
// 2. Cole by click in backdrop: onBackdropClick
// 3. Close bu Escape: onEscapeKeypress

//  In CSS is class show-modal, whitch need add on body when modal open

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

refs.openModalBtn.addEventListener("click", onModalOpen);
refs.closeModalBtn.addEventListener("click", onModalClose);

refs.backdrop.addEventListener("click", onBackdropClick);

function onModalOpen() {
  window.addEventListener("keydown", onEscapeKeypress);
  document.body.classList.add("show-modal");
}

function onModalClose() {
  window.removeEventListener("keydown", onEscapeKeypress);
  document.body.classList.remove("show-modal");
}

function onBackdropClick(event) {
  //   console.log(event.currentTarget);
  //   console.log(event.target);

  if (event.target === event.currentTarget) {
    console.log("Click on backdrop");

    onModalClose();
  }
}

function onEscapeKeypress(event) {
  console.log(event);
  const ESC_KEY_CODE = "Escape";

  if (event.code === ESC_KEY_CODE) {
    onModalClose();
  }
}
