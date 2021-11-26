function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const form = document.getElementById("form");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const content = document.querySelectorAll(".content")
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".close, .close-form-success");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const locations = document.querySelectorAll('input[name="location"]');
const birthdate = document.getElementById("birthdate");
const submit = document.querySelector(".btn-submit");
const checkbox = document.getElementById("checkbox1");
const firstNameError = firstName.nextElementSibling;
const lastNameError = document.querySelector("#last + .error");
const emailError = email.nextElementSibling;
const quantityError = quantity.nextElementSibling;
const locationError = document.getElementById("location-error");
const checkboxError = document.getElementById("checkbox-error");
const birthdateError = birthdate.nextElementSibling;
const formSuccess = document.querySelector(".form-success");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  form.style.display = "block";
  formSuccess.style.display= "none";
}

// close modal event
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  document.getElementById("form").reset();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let valid = true;
  if (!/^[a-zA-Z]{2,}$/.test(firstName.value)) {
    valid = false;
    firstNameError.style.display = "block";
    firstNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    firstName.classList.add("invalid-field");
  } else {
    firstNameError.style.display = "none";
    firstName.classList.remove("invalid-field");
  }
  if (!/^[a-zA-Z]{2,}$/.test(lastName.value)) {
    valid = false;
    lastNameError.style.display = "block";
    lastNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastName.classList.add("invalid-field");
  } else {
    lastNameError.style.display = "none";
    lastName.classList.remove("invalid-field");
  }
  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    valid = false;
    emailError.style.display = "block";
    emailError.textContent = "Veuillez entrer une adresse email valide.";
    email.classList.add("invalid-field");
  } else {
    emailError.style.display = "none";
    email.classList.remove("invalid-field")
  }
  if (birthdate.value == "") {
    valid = false;
    birthdateError.style.display = "block";
    birthdateError.textContent = "Vous devez entrer votre date de naissance.";
    birthdate.classList.add("invalid-field");
  } else {
    birthdateError.style.display = "none";
    birthdate.classList.remove("invalid-field");
  }
  if (!/^[1-9][0-9]?$/.test(quantity.value)) {
    valid = false;
    quantityError.style.display = "block";
    quantityError.textContent = "Veuillez entrer un nombre entre 0 et 99.";
    quantity.classList.add("invalid-field");
  } else {
    quantityError.style.display = "none";
    quantity.classList.remove("invalid-field");
  }
  if (!document.querySelector('input[name="location"]:checked')) {
    valid = false;
    locationError.style.display = "block";
    locationError.textContent = "Vous devez choisir une option.";
  } else {
    locationError.style.display = "none";
  }
  if (!checkbox.checked) {
    valid = false;
    checkboxError.style.display = "block";
    checkboxError.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
  } else {
    checkboxError.style.display = "none";
  }
  formSuccess.style.display = valid ? 'block' : 'none';
  form.style.display = valid ? 'none' : 'block';
});
