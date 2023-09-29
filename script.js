const form = document.getElementById('form');
const inputs = document.querySelectorAll('input');
const spans = document.querySelectorAll('span');
const email = document.getElementById('email');
const icons = document.querySelectorAll('i');
const emailIcon = document.getElementById('email-icon');
const emailMessage = document.getElementById('email-message');
const errorDisplay = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateEmptyInputs();
  validateEmail();
});

const isValidEmail = (value) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
};

const validateEmail = () => {
  const emailValue = email.value.trim();

  if (!isValidEmail(emailValue) && emailValue !== '') {
    emailMessage.textContent = 'Looks like this is not an email';
    emailIcon.classList.add('fa-solid');
  }
};

function validateEmptyInputs() {
  inputs.forEach((input, i) => {
    if (input.value === '') {
      spans[i].textContent = `${input.placeholder} cannot be empty`;
      spans[i].style.display = 'block';
      icons[i].classList.add('fa-solid');
    } else {
      spans[i].textContent = '';
      icons[i].classList.remove('fa-solid');
    }
  });
}
