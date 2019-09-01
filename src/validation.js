console.log('validation');
function validationForm() {
  var userName = document.getElementById("name").value;
  var userEmail = document.getElementById("email").value;
  var userPsw = document.getElementById("psw").value;

  var userNameIsOk, userEmailIsOk, userPswIsOk = false;

  function checkUserName() {
    if (userName == "" || !isNaN(userName) || !userName.match(/^([А-ЯЁ]{1}[а-яё]{29})|([A-Z]{1}[a-z]{29})$/u)) {
      userNameIsOk = false;
      console.log("Введите свое имя");
    } else {
      userNameIsOk = true;
      console.log("Name is ok");
    }
  };

  checkUserName();

  function checkUserEmail() {
    if (!userEmail.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      userEmailIsOk = false;
      console.log("Неверный формат email");
    } else {
      userEmailIsOk = true;
      console.log("Thank you");
    }
  };

  checkUserEmail();

  function userPsw() {
    if (userName == "" || !isNaN(userName) || !userName.match(/^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*[0-9])(?=.*[^\w\s]).{6,9}/)) {
      userNameIsOk = false;
      console.log("Придумайте новый пароль");
    } else {
      userNameIsOk = true;
      console.log("Name is ok");
    }
  };
  checkUserName();



  if (userNameIsOk && userEmailIsOk && userPsw) {
    document.getElementById("submitButton").disabled = false;
  } else {
    document.getElementById("submitButton").disabled = true;
  }
};