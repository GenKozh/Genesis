//============= Disable Native validation  =============//

var inputs = document.querySelectorAll(".validate");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].setAttribute("novalidate", true);
}

var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userPsw = document.getElementById("psw");

var nameRegex = /^([А-ЯЁ]{1}[а-яё]{1,9})|([A-Z]{1}[a-z]{1,9})$/u;
var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var pswRegexStrong = /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*[0-9])(?=.*[^\w\s]).{6,14}/;
var pswRegexWeak = /^(?=.*[a-zа-яё]).{3,9}/;

var userNameIsOk = false;
var userEmailIsOk = false;
var userPswIsOk = false;

//============= RegExp validation =============//
function validationFormName() {
  if (
    userName.value == "" ||
    !isNaN(userName.value) ||
    !userName.value.match(nameRegex)
  ) {
    userNameIsOk = false;
    console.log(userName.value);
    console.log(userName.value.match(nameRegex));
    userName.classList.add("form-container__item--error");
    userName.value = "Введите свое имя";
  } else {
    userName.classList.remove("form-container__item--error");
    userNameIsOk = true;
  }
  submitValidation();
}

function validationFormEmail() {
  if (
    userEmail.value == "" ||
    !isNaN(userEmail.value) ||
    !userEmail.value.match(emailRegex)
  ) {
    userEmailIsOk = false;
    userEmail.classList.add("form-container__item--error");
    userEmail.value = "Неверный формат email";
  } else {
    userEmail.classList.remove("form-container__item--error");
    userEmailIsOk = true;
  }
  submitValidation();
}

function validationFormPsw() {
  if (
    userPsw.value == "" ||
    !isNaN(userPsw) ||
    !userPsw.value.match(pswRegexWeak)
  ) {
    userPswIsOk = false;
    userPsw.type = "text";
    userPsw.classList.add("form-container__item--error");
    userPsw.value = "Придумайте новый пароль";
  } else {
    userPsw.type = "password";
    userPsw.classList.remove("form-container__item--error");
    userPswIsOk = true;
  }
  submitValidation();
}

function submitValidation() {
  var userTerms = document.getElementById("checkbox").checked;
  var searchForMan = document.getElementById("selector-man").checked;
  var searchForWoman = document.getElementById("selector-woman").checked;
  var submitButton = document.getElementById("submitButton");

  if (
    userNameIsOk &&
    userEmailIsOk &&
    userPswIsOk &&
    userTerms &&
    (searchForMan || searchForWoman)
  ) {
    submitButton.disabled = false;
    submitButton.classList.add("aside-bar__lower-btn--active");
  } else {
    submitButton.disabled = true;
    submitButton.classList.remove("aside-bar__lower-btn--active");
  }
}
