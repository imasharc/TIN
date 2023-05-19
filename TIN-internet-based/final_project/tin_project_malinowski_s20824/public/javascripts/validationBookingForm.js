function validateForm() {
  const startTime = document.getElementById("startTime");
  const endTime = document.getElementById("endTime");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const contact = document.getElementById("contact");
  const engineerId = document.getElementById("engineerId");
  const studioId = document.getElementById("studioId");

  const errorStartTime = document.getElementById("errorStartTime");
  const errorEndTime = document.getElementById("errorEndTime");
  const errorFirstName = document.getElementById("errorFirstName");
  const errorLastName = document.getElementById("errorLastName");
  const errorContact = document.getElementById("errorContact");
  const errorEngineerId = document.getElementById("errorEngineerId");
  const errorStudioId = document.getElementById("errorStudioId");
  const errorsSummary = document.getElementById("errorsSummary");

  resetErrors(
    [startTime, endTime, firstName, lastName, contact, engineerId, studioId],
    [
      errorStartTime,
      errorEndTime,
      errorFirstName,
      errorLastName,
      errorContact,
      errorEngineerId,
      errorStudioId,
    ],
    errorsSummary
  );

  let valid = true;

  let nowDate = new Date(),
    month = "" + (nowDate.getMonth() + 1),
    day = "" + nowDate.getDate(),
    year = nowDate.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  const nowString = [year, month, day].join("-");

  if (!checkRequired(startTime.value)) {
    valid = false;
    console.log("errorStartTime");
    startTime.classList.add("error-input");
    errorStartTime.innerText = "The field is required.";
  } else if (!checkDate(startTime.value)) {
    valid = false;
    startTime.classList.add("error-input");
    errorStartTime.innerText =
      "The field should contain the date and the time in the yyyy-MM-dd format (eg. 2000-01-01)";
  } else if (!checkDateIfAfter(startTime.value, nowString)) {
    valid = false;
    startTime.classList.add("error-input");
    errorStartTime.innerText = "The date cannot be from the past.";
  }

  if (!checkRequired(endTime.value)) {
    valid = false;
    console.log("errorEndTime");
    endTime.classList.add("error-input");
    errorEndTime.innerText = "The field is required.";
  } else if (!checkDate(endTime.value)) {
    valid = false;
    endTime.classList.add("error-input");
    errorEndTime.innerText =
      "The field should contain the date and the time in the yyyy-MM-dd format (eg. 2000-01-01)";
  } else if (!checkDateIfAfter(endTime.value, nowString)) {
    valid = false;
    endTime.classList.add("error-input");
    errorEndTime.innerText = "The date cannot be from the past.";
  }

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
    errorLastName.innerText = "The field should contain 2 to 50 characters";
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

  if (
    !checkRequired(engineerId.value) ||
    engineerId.value == "-- Choose engineer --"
  ) {
    valid = false;
    engineerId.classList.add("error-input");
    errorEngineerId.innerText = "The field is required.";
  }

  if (
    !checkRequired(studioId.value) ||
    studioId.value == "-- Choose studio --"
  ) {
    valid = false;
    studioId.classList.add("error-input");
    errorStudioId.innerText = "The field is required.";
  }

  if (!valid) {
    errorsSummary.innerText = "Form contains errors.";
  }

  return valid;
}
