const body = document.body;
document.getElementById("btn").addEventListener("click", changeColor);

async function changeColor() {
  // 1. Call Scrimba's color API (https://apis.scrimba.com/hexcolors/) to retrieve one random color.
  // 2. Use that color to update the background color of the body.
  const url = "https://apis.scrimba.com/hexcolors/?count=1";
  const response = await fetch(url);
  const colorsBody = await response.json();
  const bodyBackgroundColor = colorsBody.colors[0].value;
  body.style.setProperty("background-color", bodyBackgroundColor);
}
