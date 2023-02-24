function validateForm() {
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("email");

  const errorFirstName = document.getElementById("errorFirstName");
  const errorLastName = document.getElementById("errorLastName");
  const errorEmail = document.getElementById("errorEmail");
  const errorsSummary = document.getElementById("errorsSummary");

  resetErrors(
    [firstNameInput, lastNameInput, emailInput],
    [errorFirstName, errorLastName, errorEmail],
    errorsSummary
  );

  let valid = true;

  if (!checkRequired(firstNameInput.value)) {
    valid = false;
    firstNameInput.classList.add("error-input");
    errorFirstName.innerText = "The field is required";
  } else if (!checkTextLengthRange(firstNameInput.value, 2, 50)) {
    valid = false;
    firstNameInput.classList.add("error-input");
    errorFirstName.innerText = "The field should contain 2 to 50 characters";
  }

  if (!checkRequired(lastNameInput.value)) {
    valid = false;
    lastNameInput.classList.add("error-input");
    errorLastName.innerText = "The field is required.";
  } else if (!checkTextLengthRange(lastNameInput.value, 2, 50)) {
    valid = false;
    lastNameInput.classList.add("error-input");
    errorLastName.innerText = "The field should contain 2 to 50 characters.";
  }

  if (!checkRequired(emailInput.value)) {
    valid = false;
    emailInput.classList.add("error-input");
    errorEmail.innerText = "The field is required.";
  } else if (!checkTextLengthRange(emailInput.value, 5, 50)) {
    valid = false;
    emailInput.classList.add("error-input");
    errorEmail.innerText = "The field should contain 5 to 50 characters.";
  } else if (!checkEmail(emailInput.value)) {
    valid = false;
    emailInput.classList.add("error-input");
    errorEmail.innerText = "The field should contain a valid email address.";
  }

  if (!valid) {
    errorsSummary.innerText = "Form contains errors.";
  }

  return valid;
}
