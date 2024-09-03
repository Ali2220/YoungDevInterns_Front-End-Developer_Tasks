let form = document.getElementById('registrationform');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  if (name.value.trim() === '') {
    setError(name, 'Name is required');
    isValid = false;
  } else {
    setSuccess(name);
  }

  if (email.value.trim() === '') {
    setError(email, 'Email is required');
    isValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    setError(email, 'Email is not valid');
    isValid = false;
  } else {
    setSuccess(email);
  }

  if (password.value.trim() === '') {
    setError(password, 'Password is required');
    isValid = false;
  } else if (password.value.trim().length < 6) {
    setError(password, 'The password needs to be at least 6 characters long.');
    isValid = false;
  } else {
    setSuccess(password);
  }

  if (isValid) {
    alert('Your form has been successfully submitted');
  }

  name.value = ""
  email.value = ""
  password.value = ""


});

function setError(element, message) {
  const formGroup = element.parentElement;
  const small = formGroup.querySelector('small');
  small.innerText = message;
  small.style.visibility = 'visible';
  element.style.border = '1px solid red';
}

function setSuccess(element) {
  const formGroup = element.parentElement;
  const small = formGroup.querySelector('small');
  small.style.visibility = 'hidden';
  element.style.border = '1px solid #cccccc';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


document
.getElementById('togglePassword')
.addEventListener('click', function () {
  var passwordInput = document.getElementById('password');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});