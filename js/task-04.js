const formToLogin = document.querySelector(".login-form");
const userInformation = {};

// Функция собирает данные в переменную 'userInformation' и перезагружает форму при нажатии кнопки 'Login'
const onSubmitLoginBtn = (event) => {
  event.preventDefault();

  const {
    elements: { password, email },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Внимание! Все поля должны быть заполнены!");
  }
  // Сбор данных в переменную 'userInformation'
  userInformation.password = password.value;
  userInformation.email = email.value;
  console.log(userInformation);
  formToLogin.reset();
};
