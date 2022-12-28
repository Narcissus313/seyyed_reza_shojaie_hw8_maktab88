let btn = document.getElementsByTagName("button")[0];
let userNameInput = document.getElementById("user-name-input");
let passInput = document.getElementById("pass-input");
let passConfInput = document.getElementById("pass-conf-input");
let userSpan = document.getElementById("user-name-span");
let passSpan = document.getElementById("pass-span");
let passConfSpan = document.getElementById("pass-conf-span");
let userNameField = document.getElementsByTagName("fieldset")[0];
let passField = document.getElementsByTagName("fieldset")[1];
let passConfField = document.getElementsByTagName("fieldset")[2];

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
	let laodCondition = true;
	if (!userNameInput.value) {
		userSpan.style.display = "block";
		userNameField.style.border = "2px solid red";
		document.getElementById("user-name-input").focus();
		laodCondition = false;
	}
	if (userNameInput.value.trim().includes(" ")) {
		userSpan.style.display = "block";
		userNameField.style.border = "2px solid red";
		userSpan.innerText = "نام کاربری میبایست بدون فاصله باشد.";
		document.getElementById("user-name-input").focus();
		laodCondition = false;
	}
	if (!/^[a-zA-Z\d\s\-'#(),"0-9]*$/.test(userNameInput.value)) {
		userSpan.style.display = "block";
		userNameField.style.border = "2px solid red";
		userSpan.innerText = "فقط کاراکترهای انگلیسی";
		laodCondition = false;
	}
	if (!passInput.value) {
		passSpan.style.display = "block";
		passField.style.border = "2px solid red";
		document.getElementById("pass-input").focus();
		laodCondition = false;
	} else if (!/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(passInput.value)) {
		passSpan.innerText =
			"نام کاربری می بایست مجموعه ای حداقل 8 کاراکتری شامل اعداد و حروف لاتین باشد.";
		passSpan.style.display = "block";
		passField.style.border = "2px solid red";
		document.getElementById("pass-input").focus();
		laodCondition = false;
	}
	if (!passConfInput.value) {
		passConfSpan.style.display = "block";
		passConfField.style.border = "2px solid red";
		document.getElementById("pass-conf-input").focus();
		laodCondition = false;
	} else if (passInput.value !== passConfInput.value) {
		passConfSpan.innerText = "رمزهای عبور یکسان نمیشباشد.";
		passConfSpan.style.display = "block";
		passConfField.style.border = "2px solid red";
		document.getElementById("pass-conf-input").focus();
		laodCondition = false;
	}
	if (!!laodCondition) {
		alert("page is refreshing!");
		document.location.reload();
	}
};
