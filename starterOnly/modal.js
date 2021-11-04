function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelectorAll(".close");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const locations = document.querySelectorAll('input[name="location"]');
const submit = document.querySelector(".btn-submit");
const checkbox = document.getElementById("checkbox1");
const firstNameError = firstName.nextElementSibling;
const lastNameError = document.querySelector("#last + .error");
const emailError = email.nextElementSibling;
const quantityError = quantity.nextElementSibling;
const locationError = document.getElementById("location-error");
const checkboxError = document.getElementById("checkbox-error");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
close.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

submit.addEventListener("click", function (event) {
  let valid = true;
  if (!/^[a-zA-Z]{2,}$/.test(firstName.value)) {
    valid = false;
    firstNameError.style.display = "block";
  } else {
    firstNameError.style.display = "none";
  }
  if (!/^[a-zA-Z]{2,}$/.test(lastName.value)) {
    valid = false;
    lastNameError.style.display = "block";
  } else {
    lastNameError.style.display = "none";
  }
  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    valid = false;
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
  if (quantity.value == "") {
    valid = false;
    quantityError.style.display = "block";
  } else {
    quantityError.style.display = "none";
  }
  if (!document.querySelector('input[name="location"]:checked')) {
    valid = false;
    locationError.style.display = "block";
  } else {
    locationError.style.display = "none";
  }
  if (!checkbox1.checked) {
    valid = false;
    checkboxError.style.display = "block";
  } else {
    checkboxError.style.display = "none";
  }
  if (!valid) {
    event.preventDefault();
  }
});
