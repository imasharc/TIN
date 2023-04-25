function validateForm() {
	const songTitleInput = document.getElementById("songTitle");
	const stageNameInput = document.getElementById("stageName");
	const urlInput = document.getElementById("url");
	const emailInput = document.getElementById("email");
	
	const errorSongTitle = document.getElementById("errorSongTitle");
	const errorStageName = document.getElementById('errorStageName');
	const errorUrl = document.getElementById("errorUrl");
	const errorEmail = document.getElementById("errorEmail");

	resetErrors(
		[songTitleInput, stageNameInput, urlInput, emailInput],
		[errorSongTitle, errorStageName, errorUrl, errorEmail]
	);
	
	let valid = true;

	if (!checkRequired(songTitleInput.value)) {
		valid = false;
		songTitleInput.classList.add('error-input');
		errorSongTitle.innerText = 'The field is required';
	} else if (!checkTextLengthRange(songTitleInput.value, 2, 50)) {
		valid = false;
		songTitleInput.classList.add('error-input');
		errorSongTitle.innerText = 'The field should contain 2 to 50 characters';
	}
	
	if (!checkRequired(stageNameInput.value)) {
		valid = false;
		stageNameInput.classList.add('error-input');
		errorStageName.innerText = 'The field is required';
	} else if (!checkTextLengthRange(stageNameInput.value, 2, 50)) {
		valid = false;
		stageNameInput.classList.add('error-input');
		errorStageName.innerText = 'The field should contain 2 to 50 characters';
	}
	
	if (!checkRequired(urlInput.value)) {
		valid = false;
		urlInput.classList.add('error-input');
		errorUrl.innerText = 'The field is required';
	} else if (!checkTextLengthRange(urlInput.value, 5, 120)) {
		valid = false;
		urlInput.classList.add('error-input');
		errorUrl.innerText = 'The field should contain 5 to 120 characters';
	}
	
	if (emailInput.value !== '') {
			if (!checkTextLengthRange(emailInput.value, 5, 60)) {
			valid = false;
			emailInput.classList.add('error-input');
			errorEmail.innerText = 'The field should contain 5 to 60 characters';
		} else if (!checkEmail(emailInput.value)) {
			valid = false;
			emailInput.classList.add("error-input");
			errorEmail.innerText = "The field should contain a valid email address.";
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

function checkEmail(value) {
	if (!value) {
		return false;
	}

	value = value.toString().trim();
	const regex =
	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	return regex.test(value);
}

﻿function resetErrors(inputs, errorsTexts) {
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].classList.remove("error-input");
	}

	for (let i = 0; i < errorsTexts.length; i++) {
		errorsTexts[i].innerText = "";
	}
}