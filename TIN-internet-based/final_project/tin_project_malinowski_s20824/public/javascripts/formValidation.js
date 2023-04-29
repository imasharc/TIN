function validateForm() {
  const titleInput = document.getElementById("title");
  const urlInput = document.getElementById("url");
  const isrcInput = document.getElementById("isrc");

  const errorTitle = document.getElementById("errorTitle");
  const errorUrl = document.getElementById("errorUrl");
  const errorISRC = document.getElementById("errorISRC");

  resetErrors(
    [titleInput, urlInput, isrcInput],
    [errorTitle, errorUrl, errorISRC]
  );

  let valid = true;

  if (!checkRequired(titleInput.value)) {
    valid = false;
    titleInput.classList.add("error-input");
    errorTitle.innerText = "The field is required";
  } else if (!checkTextLengthRange(titleInput.value, 2, 50)) {
    valid = false;
    titleInput.classList.add("error-input");
    errorTitle.innerText = "The field should contain 2 to 50 characters";
  }

  if (!checkRequired(urlInput.value)) {
    valid = false;
    urlInput.classList.add("error-input");
    errorUrl.innerText = "The field is required";
  } else if (!checkTextLengthRange(urlInput.value, 5, 120)) {
    valid = false;
    urlInput.classList.add("error-input");
    errorUrl.innerText = "The field should contain 5 to 120 characters";
  }

  if (isrcInput.value !== "") {
    if (!checkRequired(isrcInput.value)) {
      valid = false;
      isrcInput.classList.add("error-input");
      errorISRC.innerText = "The field is required";
    } else if (!checkTextLengthRange(isrcInput.value, 12, 12)) {
      valid = false;
      isrcInput.classList.add("error-input");
      errorISRC.innerText = "The field should contain 12 characters";
    }
  }

  return valid;
}

function checkRequired(value) {
  if (!value) {
    return false;
  }

  value = value.toString().trim();

  if (value === "") {
    return false;
  }

  return true;
}

function checkTextLengthRange(value, min, max) {
  if (!value) {
    return false;
  }

  value = value.toString().trim();
  const length = value.length;

  if (length > max) {
    return false;
  }

  if (length < min) {
    return false;
  }

  return true;
}

function resetErrors(inputs, errorsTexts) {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("error-input");
  }

  for (let i = 0; i < errorsTexts.length; i++) {
    errorsTexts[i].innerText = "";
  }
}
