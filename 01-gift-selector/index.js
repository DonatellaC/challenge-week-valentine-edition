document.getElementById("btn").addEventListener("click", calculate);
let costEl = document.getElementById("cost-el");
const foodSelection = document.getElementById("food-select");
const transportSelection = document.getElementById("transport-select");
const balloon = document.getElementById("balloon-checkbox");

function calculate() {
  // 1. Write the JavaScript to calculate the total cost of the selected options from the form.
  // 2. Display the total cost in the cost-el span.

  const foodValue = parseInt(foodSelection.value);
  const transportValue = parseInt(transportSelection.value);

  if (foodSelection.value === "" || transportSelection.value === "") {
    costEl.innerText = "Select both options";
  } else if (balloon.checked === true) {
    costEl.innerText = foodValue + transportValue + 3;
  } else if (balloon.checked === false) {
    costEl.innerText = foodValue + transportValue;
  }
}
