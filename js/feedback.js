const form = document.querySelector("#feedbackForm");
const firstName = document.querySelector("#first-name");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#last-name");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const phoneNumber = document.querySelector("#phoneNumber");
const phoneError = document.querySelector("#phoneError");
const feedback = document.querySelector("#feedback");
const feedbackError = document.querySelector("#feedbackError");
const overlay = document.getElementById("overlay");
const modalSelection = document.querySelector(".modal");
const closeModalButtons = document.querySelectorAll("[data-close-button]");

function validateFeedback() {
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
  if (validateNumber(phoneNumber.value)) {
    phoneError.style.display = "none";
  } else {
    phoneError.style.display = "block";
  }
  if (checkLength(feedback.value, 25) === true) {
    feedbackError.style.display = "none";
  } else {
    feedbackError.style.display = "block";
  }
  if (
    feedbackError.style.display === "none" &&
    phoneError.style.display === "none" &&
    emailError.style.display === "none" &&
    lastNameError.style.display === "none" &&
    firstNameError.style.display === "none"
  ) {
    overlay.classList.add("active");
    modalSelection.classList.add("active");
  }
}

form.addEventListener("submit", validateFeedback);

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

function validateNumber(value) {
  return /^\d{7,}$/.test(value.replace(/[\s()+\-\.]|ext/gi, ""));
}

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
