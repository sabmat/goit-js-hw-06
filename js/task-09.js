const body = document.querySelector('body');
const mainColor = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', changeColor);


function changeColor() {

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
   
  const color = getRandomHexColor()
  mainColor.textContent = color;
  body.style.backgroundColor = color;
}





