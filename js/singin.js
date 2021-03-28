const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
    
	
	if(usernameValue.length < 8) {
		setErrorFor(username, 'Username trên 8 kí tự');
        document.getElementById(username.value = "");
        setErrorFor(Error = "none")
	} else {
		setSuccessFor(username);
	}
	
	if(passwordValue.length < 8) {
		setErrorFor(password, 'Password trên 8 kí tự');
        document.getElementById(password.value = "");
	} else {
		setSuccessFor(password);

	}
	
	if(password2Value.length < 8) {
		setErrorFor(password2, 'Password cannot be blank');
        document.getElementById(password2.value = "");
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
        document.getElementById(password2.value = "");  
	} else{
		setSuccessFor(password2);
	}
    if (usernameValue.length >= 8 && passwordValue.length >= 8 &&  passwordValue === password2Value ) {
        alert("Bạn đá đăng ký thành công")
        location.href = "../login.html"
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
    const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function setSuccessFor2(input) {
	const formControl2 = input.parentElement;
	formControl2.className = 'form-control success';
}












