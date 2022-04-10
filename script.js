const password = document.getElementById("password");
const confPassword = document.getElementById("confPassword");
const passCheck = document.querySelector(".passCheck");
const inputs = document.querySelectorAll("input");

const check = () => {
  if (password.value !== confPassword.value) {
    password.classList.add("error");
    confPassword.classList.add("error");
    passCheck.classList.remove("hidden");
    password.classList.remove("valid");
    confPassword.classList.remove("valid");
  } else {
    password.classList.remove("error");
    confPassword.classList.remove("error");
    passCheck.classList.add("hidden");
    password.classList.add("valid");
    confPassword.classList.add("valid");
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
