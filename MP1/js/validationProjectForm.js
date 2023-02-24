function validateForm() {
  const projectName = document.getElementById("projectName");
  const clientName = document.getElementById("clientName");
  const employeeName = document.getElementById("employeeName");
  const startDate = document.getElementById("startDate");
  const deadline = document.getElementById("deadline");
  const budget = document.getElementById("budget");

  const errorProjectName = document.getElementById("errorProjectName");
  const errorClient = document.getElementById("errorClient");
  const errorEmployee = document.getElementById("errorEmployee");
  const errorStartDate = document.getElementById("errorStartDate");
  const errorDeadline = document.getElementById("errorDeadline");
  const errorBudget = document.getElementById("errorBudget");
  const errorsSummary = document.getElementById("errorsSummary");

  resetErrors(
    [projectName, clientName, employeeName, startDate, deadline, budget],
    [
      errorProjectName,
      errorClient,
      errorEmployee,
      errorStartDate,
      errorDeadline,
      errorBudget,
    ],
    errorsSummary
  );

  let valid = true;

  if (!checkRequired(projectName.value)) {
    valid = false;
    projectName.classList.add("error-input");
    errorProjectName.innerText = "The field is required";
  } else if (!checkTextLengthRange(projectName.value, 2, 50)) {
    valid = false;
    projectName.classList.add("error-input");
    errorProjectName.innerText = "The field should contain 2 to 50 characters";
  }

  if (
    !checkRequired(clientName.value) ||
    clientName.value == "-- Choose client --"
  ) {
    valid = false;
    clientName.classList.add("error-input");
    errorClient.innerText = "The field is required.";
  }

  if (
    !checkRequired(employeeName.value) ||
    employeeName.value == "-- Choose employee --"
  ) {
    valid = false;
    employeeName.classList.add("error-input");
    errorEmployee.innerText = "The field is required.";
  }

  let nowDate = new Date(),
    month = "" + (nowDate.getMonth() + 1),
    day = "" + nowDate.getDate(),
    year = nowDate.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  const nowString = [year, month, day].join("-");

  if (!checkRequired(startDate.value)) {
    valid = false;
    startDate.classList.add("error-input");
    errorStartDate.innerText = "The field is required.";
  } else if (!checkDate(startDate.value)) {
    valid = false;
    startDate.classList.add("error-input");
    errorStartDate.innerText =
      "The field should contain the date and the time in the yyyy-MM-dd format (eg. 2000-01-01)";
  } else if (!checkDateIfAfter(startDate.value, nowString)) {
    valid = false;
    startDate.classList.add("error-input");
    errorStartDate.innerText = "The date cannot be from the past.";
  }

  if (!checkRequired(deadline.value)) {
    valid = false;
    deadline.classList.add("error-input");
    errorDeadline.innerText = "The field is required.";
  } else if (!checkDate(deadline.value)) {
    valid = false;
    deadline.classList.add("error-input");
    errorDeadline.innerText =
      "The field should contain the date and the time in the yyyy-MM-dd format (eg. 2000-01-01)";
  } else if (!checkDateIfAfter(deadline.value, startDate.value)) {
    valid = false;
    deadline.classList.add("error-input");
    errorDeadline.innerText = "Deadline cannot be before the starting date";
  }

  if (!checkRequired(budget.value)) {
    valid = false;
    budget.classList.add("error-input");
    errorBudget.innerText = "The field is required.";
  } else if (!checkNumber(budget.value)) {
    valid = false;
    budget.classList.add("error-input");
    errorBudget.innerText = "The field should be a number.";
  } else if (!checkNumberRange(budget.value, 0, 1000000000)) {
    valid = false;
    budget.classList.add("error-input");
    errorBudget.innerText =
      "The field should be a number in the range from 0 to 1 000 000 000.";
  }

  if (!valid) {
    errorsSummary.innerText = "Form contains errors.";
  }

  return valid;
}
