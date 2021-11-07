const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute("data-length");

input.addEventListener("blur", function (event) {
  input.classList.add("invalid");
  if (event.currentTarget.value.length === Number(inputLength)) {
    input.classList.replace("invalid", "valid");
  }
});
