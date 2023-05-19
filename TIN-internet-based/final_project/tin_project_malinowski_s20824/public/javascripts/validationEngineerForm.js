function validateForm() {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const specialisation = document.getElementById("specialisation");
  const hourRate = document.getElementById("hourRate");
  const contact = document.getElementById("contact");

  const errorFirstName = document.getElementById("errorFirstName");
  const errorLastName = document.getElementById("errorLastName");
  const errorSpecialisation = document.getElementById("errorSpecialisation");
  const errorHourRate = document.getElementById("errorHourRate");
  const errorContact = document.getElementById("errorContact");
  const errorsSummary = document.getElementById("errorsSummary");

  resetErrors(
    [firstName, lastName, specialisation, hourRate, contact],
    [
      errorFirstName,
      errorLastName,
      errorSpecialisation,
      errorHourRate,
      errorContact,
    ],
    errorsSummary
  );

  let valid = true;

  if (!checkRequired(firstName.value)) {
    valid = false;
    firstName.classList.add("error-input");
    errorFirstName.innerText = "The field is required";
  } else if (!checkTextLengthRange(firstName.value, 2, 50)) {
    valid = false;
    firstName.classList.add("error-input");
    errorFirstName.innerText = "The field should contain 2 to 50 characters";
  }

  if (!checkRequired(lastName.value)) {
    valid = false;
    lastName.classList.add("error-input");
    errorLastName.innerText = "The field is required";
  } else if (!checkTextLengthRange(lastName.value, 2, 50)) {
    valid = false;
    lastName.classList.add("error-input");
    errorLastName.innerText = "The field should contain 5 to 120 characters";
  }

  if (!checkRequired(specialisation.value)) {
    valid = false;
    specialisation.classList.add("error-input");
    errorSpecialisation.innerText = "The field is required";
  } else if (!checkTextLengthRange(specialisation.value, 2, 50)) {
    valid = false;
    specialisation.classList.add("error-input");
    errorSpecialisation.innerText = "The field should contain 12 characters";
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
    errorContact.innerText = "The field should contain 12 characters";
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
