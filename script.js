"use strict";

// SELECTING ALL ERROR MESSAGES
const emailErr = document.querySelector(".email-error");
const pwdErr = document.querySelector(".pwd-error");
const confirmPwd = document.querySelector(".confirm");
const numErr = document.querySelector(".num-error");

// SELECTING EMAIL & PASSWORD INPUTS
const inputEmail = document.querySelector("#email");
const inputPwd = document.querySelector("#password");
const inputConfirm = document.querySelector("#c-password");
const inputNumber = document.querySelector("#number");

// VALIDATING EMAIL
inputEmail.addEventListener("input", () => {
  inputEmail.addEventListener("focusout", function () {
    if (!inputEmail.checkValidity()) {
      emailErr.classList.remove("hidden");
    } else {
      emailErr.classList.add("hidden");
    }
  });
});

// VALIDATING PASSWORD
inputPwd.addEventListener("focusout", function () {
  if (!inputPwd.checkValidity()) {
    pwdErr.classList.remove("hidden");
  } else {
    pwdErr.classList.add("hidden");
    inputConfirm.disabled = false;
  }
});

// CHECKING PASSWORD CONFIRMATION
inputConfirm.addEventListener("focusout", function () {
  if (inputConfirm.value !== inputPwd.value) {
    confirmPwd.classList.remove("hidden");
  } else {
    confirmPwd.classList.add("hidden");
    inputConfirm.style.outline = "1.5px solid var(--color2)";
  }
});

// VALIDATING PHONE NUMBER
inputNumber.addEventListener("focusout", function () {
  if (!inputNumber.checkValidity() || typeof inputNumber.value !== "number") {
    numErr.classList.remove("hidden");
  } else {
    numErr.classList.add("hidden");
    inputConfirm.style.outline = "1.5px solid var(--color2)";
  }
});
