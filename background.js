const colorButton = document.getElementById('colorButton');


colorButton.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  colorDisplay.textContent = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
