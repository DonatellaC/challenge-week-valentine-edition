const greetingDisplay = document.getElementById("greeting-display");
const form = document.getElementById("form");
const greetingValue = document.getElementById("greeting-select");
const inputValueTo = document.getElementById("recipient-input");
const inputValueFrom = document.getElementById("sender-input");

form.addEventListener("change", writeGreeting);

function writeGreeting() {
  // Write a function update the message in the greeting-display paragraph each time the form is updated.
  greetingDisplay.textContent = `${inputValueTo.value}, ${greetingValue.value}. ${inputValueFrom.value}`;
}
