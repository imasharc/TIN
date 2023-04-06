function validateForm() {
	const songTitleInput = document.getElementById("songTitle");
	const stageNameInput = document.getElementById("stageName");
	const urlInput = document.getElementById("url");
	const emailInput = document.getElementById("email");
	
	console.log('Hello');
	const errorSongTitle = document.getElementById("errorSongTitle");
	/*
	const errorStageName = document.getElementById(errorStageName);
	const errorUrl = document.getElementById("errorUrl");
	const errorEmail = document.getElementById("errorEmail");
	*/
	
	let valid = true;
	
	if (!checkRequired(songTitleInput.value)) {
		valid = false;
		songTitleInput.classList.add('error-input');
		errorSongTitle.innerText = 'The field is required';
	} else if (!checkTextLengthRange(songTitleInput.value, 2, 50)) {
		valid = false;
		songTitleInput.classList.add('error-input');
		errorSongTitle.innerText = 'The field should contain 2 to 50 characters';
		console.log('Boy4');
	}
	
	return valid;
}

function checkRequired(value) {
	console.log('World');
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
    console.log('Boy1');
	return false;
  }

  value = value.toString().trim();
  const length = value.length;

  if (length > max) {
	  console.log('Boy2');
    return false;
  }

  if (length < min) {
	  console.log('Boy3');
    return false;
  }

  return true;
}