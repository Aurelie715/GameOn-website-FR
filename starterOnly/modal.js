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

form.addEventListener("submit", function (event) {
  let valid = true;
  if (!/^[a-zA-Z]{2,}$/.test(firstName.value)) {
    valid = false;
    firstNameError.style.display = "block";
    firstNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  } else {
    firstNameError.style.display = "none";
  }
  if (!/^[a-zA-Z]{2,}$/.test(lastName.value)) {
    valid = false;
    lastNameError.style.display = "block";
    lastNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  } else {
    lastNameError.style.display = "none";
  }
  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    valid = false;
    emailError.style.display = "block";
    emailError.textContent = "Veuillez entrer une adresse email valide.";
  } else {
    emailError.style.display = "none";
  }
  if (birthdate.value == "") {
    valid = false;
    birthdateError.style.display = "block";
    birthdateError.textContent = "Vous devez entrer votre date de naissance.";
  } else {
    birthdateError.style.display = "none";
  }
  if (!/^[1-9][0-9]?$/.test(quantity.value)) {
    valid = false;
    quantityError.style.display = "block";
    quantityError.textContent = "Veuillez entrer un nombre entre 0 et 99.";
  } else {
    quantityError.style.display = "none";
  }
  if (!document.querySelector('input[name="location"]:checked')) {
    valid = false;
    locationError.style.display = "block";
    locationError.textContent = "Vous devez choisir une option.";
  } else {
    locationError.style.display = "none";
  }
  if (!checkbox1.checked) {
    valid = false;
    checkboxError.style.display = "block";
    checkboxError.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
  } else {
    checkboxError.style.display = "none";
  }
  if (!valid) {
    event.preventDefault();
  }

//   const form = document.getElementById("form");
// let formDatas = new FormData(form)

// formDatas.forEach((value, key) => {
//   console.log(key + " " + value);
// })
});
