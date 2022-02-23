const body = document.body;
const heart = document.getElementById("heart");
document.getElementById("btn").addEventListener("click", changeColor);
document.getElementById("btn-reset").addEventListener("click", resetColor);
document
  .getElementById("btn-heart")
  .addEventListener("click", changeColorHeart);

async function changeColor() {
  // 1. Call Scrimba's color API (https://apis.scrimba.com/hexcolors/) to retrieve one random color.
  // 2. Use that color to update the background color of the body.
  const url = "https://apis.scrimba.com/hexcolors/?count=1";
  const response = await fetch(url);
  const colorsBody = await response.json();
  const bodyBackgroundColor = colorsBody.colors[0].value;
  body.style.setProperty("background-color", bodyBackgroundColor);
}

async function changeColorHeart() {
  const url = "https://apis.scrimba.com/hexcolors/?count=1";
  const response = await fetch(url);
  const colorsHeart = await response.json();
  const heartBackgroundColor = colorsHeart.colors[0].value;
  heart.style.setProperty("--white", heartBackgroundColor);
}

function resetColor() {
  body.style.setProperty("background-color", "#c7b9ff");
  heart.style.setProperty("--white", "#fff");
}
