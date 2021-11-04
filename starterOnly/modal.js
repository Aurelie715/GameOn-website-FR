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
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');
const locations = document.querySelectorAll('input[name="location"]');
const submit = document.querySelector(".btn-submit");
const checkbox = document.getElementById('checkbox1')


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



submit.addEventListener("click", function(event) {
  let valid = true;
  if (!/^[a-zA-Z]{2,}$/.test(firstName.value)){
    valid = false;
  }
  if (!/^[a-zA-Z]{2,}$/.test(lastName.value)){
    valid = false;
  }
  if(!/^\S+@\S+\.\S+$/.test(email.value)){
    valid = false;
  }
  if (quantity.value == "") {
    valid = false;
  }
  if (!document.querySelector('input[name="location"]:checked')) {
    valid = false;
  }
  if (!checkbox1.checked) {
    valid = false;
  }
  if (!valid) {event.preventDefault();}
});





