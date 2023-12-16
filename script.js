"use strict";

let valid = 0;
// SELECTING ALL ERROR MESSAGES
const emailErr = document.querySelector(".email-error");
const pwdErr = document.querySelector(".pwd-error");
const confirmPwd = document.querySelector(".confirm");
const inputErr = document.querySelector(".input-error");
const numErr = document.querySelector(".num-error");

// SELECTING INPUTS
const inputEmail = document.querySelector("#email");
const inputPwd = document.querySelector("#password");
const inputConfirm = document.querySelector("#c-password");
const inputAll = document.querySelectorAll(".input");
const btnSubmit = document.querySelector(".btn-create");
const inputNum = document.querySelector("#number");

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
inputConfirm.addEventListener("input", function () {
  if (inputConfirm.value !== inputPwd.value) {
    confirmPwd.classList.remove("hidden");
  } else {
    confirmPwd.classList.add("hidden");
    inputConfirm.style.outline = "1.5px solid var(--color2)";
  }
});

// PHONE NUMBER VALIDATION
inputNum.addEventListener("focusout", function () {
  if (!inputNum.checkValidity()) {
    numErr.classList.remove("hidden");
  } else {
    numErr.classList.add("hidden");
  }
});

const isValid = function () {
  for (const input of inputAll) {
    if (input.value !== "") valid++;
  }
  return valid;
};

// MAKING SURE ALL FIELDS ARE FILLED OUT WHEN SUBMITTING FORM AND SHOWING WELCOME PAGE
const pageMain = document.querySelector(".main");
const pageWelcome = document.querySelector(".pg-welcome");
btnSubmit.addEventListener("click", function () {
  isValid();
  if (valid > 5) {
    pageMain.style.display = "none";
    pageWelcome.classList.remove("hidden");
  } else {
    inputErr.classList.remove("hidden");
  }
});
