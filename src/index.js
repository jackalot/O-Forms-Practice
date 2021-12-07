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
    } if (country.value !== 'unitedstates' || country.value !== 'united states') {
      //    just one country for the sake of simplicity, in an actual form, this would be a for loop
      //    testing our input against the loop variables.
      //    I.E: if(country.value.toLowerCase() === countries[i])
      document.querySelector('.country-error').textContent = 'enter a valid country(only the united states is valid)';
      //    country.setCustomValidity('enter a valid country(only the united states is valid)');
      return false;
    }
    return true;
  }
  const submit = document.querySelector('.submit');
  submit.addEventListener('click', () => {
    console.log('click');
    const email = validateEmail();
    const country = validateCountry();
  });
}
validateForm();
