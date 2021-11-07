const input = document.querySelector("#name-input");
const nameLabel = document.querySelector("span#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  event.currentTarget.value !== ""
    ? (nameLabel.textContent = event.currentTarget.value)
    : (nameLabel.textContent = "Anonymous");
}
