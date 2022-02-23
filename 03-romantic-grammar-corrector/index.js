const message = document.getElementById("paragraph");
const paragraphMessage = message.textContent;
const firstLetter = paragraphMessage.charAt(0).toUpperCase();
const remainderLetters = paragraphMessage.slice(1).toLowerCase();

document.getElementById("btn").addEventListener("click", correct);

function correct() {
  // Write the JavaScript to grab the message from the paragraph and correct its capitalisation.
  // It should read "Valentine's"
  // Render the corrected message to the DOM.

  const correctedMessage = firstLetter + remainderLetters;
  message.textContent = correctedMessage;
}
