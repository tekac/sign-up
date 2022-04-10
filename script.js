const password = document.getElementById("password");
const confPassword = document.getElementById("confPassword");
const passCheck = document.querySelector(".passCheck");
const inputs = document.querySelectorAll("input");

const check = () => {
  if (password.value !== confPassword.value) {
    password.classList.add("error");
    confPassword.classList.add("error");
    passCheck.classList.remove("hidden");
  } else if (password.value === confPassword.value) {
    password.classList.add("valid");
    confPassword.classList.add("valid");
    passCheck.classList.add("hidden");
  }
};

const reset = () => {
  inputs.forEach((input) => {
    input.innerHTML = "";
    input.value = "";
  });
};

window.onload = function () {
  reset();
};
