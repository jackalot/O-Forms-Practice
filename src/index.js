function validateForm() {
  function validateEmail() {
    const email = document.querySelector('.email');
    if (!email.checkValidity()) {
      document.querySelector('.email-error').textContent = email.validationMessage;
    }
  }
  const submit = document.querySelector('.submit');
  submit.addEventListener('click', () => {
    console.log('click');
    validateEmail();
  });
}
validateForm();
