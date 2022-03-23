const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#first-name");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#last-name");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const successContainer = document.querySelector(".inner-success-container");

function validateSignup() {
  event.preventDefault();

  if (checkLength(firstName.value, 0) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }
  if (checkLength(lastName.value, 0) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checkLength(password.value, 7) === true) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }
  if (
    passwordError.style.display === "none" &&
    emailError.style.display === "none" &&
    lastNameError.style.display === "none" &&
    firstNameError.style.display === "none"
  ) {
    successContainer.style.display = "inherit";
  }
}

form.addEventListener("submit", validateSignup);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
