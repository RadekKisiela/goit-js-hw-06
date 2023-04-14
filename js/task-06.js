const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', () => {
  const requiredLength = parseInt(validationInput.dataset.length);
  const enteredText = validationInput.value.trim();
  if (enteredText.length === requiredLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});