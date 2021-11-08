const formToLogin = document.querySelector(".login-form");
const userInformation = {};

function onSubmitLoginBtn(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;

  if (elements.email.value === "" || elements.password.value === "") {
    return alert("Внимание! Все поля должны быть заполнены!");
  }

  userInformation.password = elements.password.value;
  userInformation.email = elements.email.value;
  console.log(userInformation);
  formToLogin.reset();
}

formToLogin.addEventListener("submit", onSubmitLoginBtn);
