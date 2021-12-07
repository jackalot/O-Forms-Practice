function validateForm() {
  function validateEmail() {
    const email = document.querySelector('.email');
    if (!email.checkValidity()) {
      document.querySelector('.email-error').textContent = email.validationMessage;
      return false;
    }
    document.querySelector('.email-error').textContent = '';
    return true;
  }
  function validateCountry() {
    const country = document.querySelector('.country');
    console.log(country.value);
    if (!country.checkValidity()) {
      document.querySelector('.country-error').textContent = country.validationMessage;
      return false;
    }
    if (country.value === 'unitedstates' || country.value === 'united states') {
      document.querySelector('.country-error').textContent = '';
      return true;
    }
    if (country.value !== 'unitedstates' || country.value !== 'united states') {
      //    just one country for the sake of simplicity, in an actual form, this would be a for loop
      //    testing our input against the loop variables.
      //    I.E: if(country.value.toLowerCase() === countries[i])
      document.querySelector('.country-error').textContent = 'enter a valid country(only the united states is valid)';
      //    country.setCustomValidity('enter a valid country(only the united states is valid)');
      return false;
    }
  }
  function validateZipCode() {
    const zipCode = document.querySelector('.zip-code');
    if (zipCode.validity.rangeUnderflow) {
      document.querySelector('.zip-code-error').textContent = zipCode.validationMessage;
      return false;
    } if (zipCode.validity.rangeOverflow) {
      document.querySelector('.zip-code-error').textContent = zipCode.validationMessage;
      return false;
    }
    document.querySelector('.zip-code-error').textContent = '';
    return true;
  }
  function validatePassword() {
    const password = document.querySelector('.password');
    if (!password.checkValidity()) {
      document.querySelector('.password-error').textContent = password.validationMessage;
      return false;
    }
    if (password.validity.rangeUnderflow) {
      document.querySelector('.password-error').textContent = password.validationMessage;
      return false;
    }
    document.querySelector('.password-error').textContent = '';
    return true;
  }
  function validateConfirmPassword() {
    const confirmPassword = document.querySelector('.confirm-password');
    if (!confirmPassword.checkValidity()) {
      document.querySelector('.confirm-password-error').textContent = confirmPassword.validationMessage;
      return false;
    }
    if (confirmPassword.validity.rangeUnderflow) {
      document.querySelector('.confirm-password-error').textContent = confirmPassword.validationMessage;
      return false;
    }
    const password = document.querySelector('.password');
    if (confirmPassword.value !== password.value) {
      document.querySelector('.confirm-password-error').textContent = 'These passwords do not match';
      return false;
    }
    document.querySelector('.confirm-password-error').textContent = '';
    return true;
  }
  const submit = document.querySelector('.submit');
  submit.addEventListener('click', () => {
    console.log('click');
    const email = validateEmail();
    const country = validateCountry();
    const zipCode = validateZipCode();
    const password = validatePassword();
    const confirmPassword = validateConfirmPassword();
  });
}
validateForm();
