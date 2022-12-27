let btn = document.getElementsByTagName("button")[0];
let userNameInput = document.getElementById("user-name-input");
let passInput = document.getElementById("pass-input");
let passConfInput = document.getElementById("pass-conf-input");
let userSpan = document.getElementById("user-name-span");
let passSpan = document.getElementById("pass-span");
let passConfSpan = document.getElementById("pass-conf-span");

userNameInput.oninput = function () {
	userSpan.style.display = "none";
	document.getElementsByTagName("fieldset")[0].style.border =
		"2px solid black";
};
passInput.oninput = function () {
	passSpan.style.display = "none";
	document.getElementsByTagName("fieldset")[1].style.border =
		"2px solid black";
};
passConfInput.oninput = function () {
	passConfSpan.style.display = "none";
	document.getElementsByTagName("fieldset")[2].style.border =
		"2px solid black";
};

btn.onclick = function () {
	if (!userNameInput.value) {
		userSpan.style.display = "block";
		document.getElementsByTagName("fieldset")[0].style.border =
			"2px solid red";
	}
	if (!passInput.value) {
		passSpan.style.display = "block";
		document.getElementsByTagName("fieldset")[1].style.border =
			"2px solid red";
	}
	if (!passConfInput.value) {
		passConfSpan.style.display = "block";
		document.getElementsByTagName("fieldset")[2].style.border =
			"2px solid red";
	}
	if (!passConfInput.value) {
		passConfSpan.style.display = "block";
		document.getElementsByTagName("fieldset")[2].style.border =
			"2px solid red";
	}
};
