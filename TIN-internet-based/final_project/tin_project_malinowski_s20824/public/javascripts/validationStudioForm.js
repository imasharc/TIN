function validateForm() {
  const name = document.getElementById("name");
  const street = document.getElementById("street");
  const postalCode = document.getElementById("postalCode");
  const city = document.getElementById("city");
  const hourRate = document.getElementById("hourRate");
  const contact = document.getElementById("contact");

  const errorName = document.getElementById("errorName");
  const errorStreet = document.getElementById("errorStreet");
  const errorPostalCode = document.getElementById("errorPostalCode");
  const errorCity = document.getElementById("errorCity");
  const errorHourRate = document.getElementById("errorHourRate");
  const errorContact = document.getElementById("errorContact");
  const errorsSummary = document.getElementById("errorsSummary");

  resetErrors(
    [name, street, postalCode, city, hourRate, contact],
    [
      errorName,
      errorStreet,
      errorPostalCode,
      errorCity,
      errorHourRate,
      errorContact,
    ],
    errorsSummary
  );

  let valid = true;

  if (!checkRequired(name.value)) {
    valid = false;
    name.classList.add("error-input");
    errorName.innerText = "The field is required";
  } else if (!checkTextLengthRange(name.value, 2, 50)) {
    valid = false;
    name.classList.add("error-input");
    errorName.innerText = "The field should contain 2 to 50 characters";
  }

  if (!checkRequired(street.value)) {
    valid = false;
    street.classList.add("error-input");
    errorStreet.innerText = "The field is required";
  } else if (!checkTextLengthRange(street.value, 2, 50)) {
    valid = false;
    street.classList.add("error-input");
    errorStreet.innerText = "The field should contain 2 to 50 characters";
  }

  if (!checkRequired(city.value)) {
    valid = false;
    city.classList.add("error-input");
    errorCity.innerText = "The field is required";
  } else if (!checkTextLengthRange(city.value, 2, 50)) {
    valid = false;
    city.classList.add("error-input");
    errorCity.innerText = "The field should contain 2 to 50 characters";
  }

  if (!checkRequired(postalCode.value)) {
    valid = false;
    postalCode.classList.add("error-input");
    errorPostalCode.innerText = "The field is required";
  } else if (!checkTextLengthRange(postalCode.value, 5, 5)) {
    valid = false;
    postalCode.classList.add("error-input");
    errorPostalCode.innerText = "The field should contain 5 characters";
  }

  if (!checkRequired(hourRate.value)) {
    valid = false;
    hourRate.classList.add("error-input");
    errorHourRate.innerText = "The field is required.";
  } else if (!checkNumber(hourRate.value)) {
    valid = false;
    hourRate.classList.add("error-input");
    errorHourRate.innerText = "The field should be a number.";
  } else if (!checkNumberRange(hourRate.value, 0, 100000)) {
    valid = false;
    hourRate.classList.add("error-input");
    errorHourRate.innerText =
      "The field should be a number in the range from 0 to 100 000.";
  }

  if (!checkRequired(contact.value)) {
    valid = false;
    contact.classList.add("error-input");
    errorContact.innerText = "The field is required";
  } else if (!checkTextLengthRange(contact.value, 2, 50)) {
    valid = false;
    contact.classList.add("error-input");
    errorContact.innerText = "The field should contain 2 to 50 characters";
  } else if (!checkEmail(contact.value)) {
    valid = false;
    contact.classList.add("error-input");
    errorContact.innerText = "The field should contain a valid email address.";
  }

  if (!valid) {
    errorsSummary.innerText = "Form contains errors.";
  }

  return valid;
}
