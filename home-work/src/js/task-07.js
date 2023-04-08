const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.fontSizeControl.addEventListener("input", onTextSizeChange);

function onTextSizeChange(event) {
  //   console.log(event.currentTarget.value);

  const fontSize = event.currentTarget.value;

  text.style.fontSize = `${fontSize}px`;
}
