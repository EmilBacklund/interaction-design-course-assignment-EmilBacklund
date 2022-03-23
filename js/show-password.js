const toggleHideShow = document.querySelector(".see-password");

function showPassword() {
  const showHidePassword = document.getElementById("password");
  if (showHidePassword.type === "password") {
    showHidePassword.type = "text";
  } else {
    showHidePassword.type = "password";
  }
}

toggleHideShow.addEventListener("click", showPassword);
