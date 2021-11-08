const styleOfBody = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const backgroundColorValue = document.querySelector(".color");

function getRandomHexColor() {
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  backgroundColorValue.textContent = randomColor;
  styleOfBody.style.backgroundColor = randomColor;
}

changeColorBtn.addEventListener("click", getRandomHexColor);
