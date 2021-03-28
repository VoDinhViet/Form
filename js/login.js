const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
    
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();

	if(usernameValue.length < 8) {
		setErrorFor(username, 'Username trên 8 kí tự');
        document.getElementById(username.value = "");
	} else {
		setSuccessFor(username);
	}
	
	if(passwordValue.length < 8) {
		setErrorFor(password, 'Password trên 8 kí tự');
        document.getElementById(password.value = "");
	} else {
		setSuccessFor(password);

	}

    if (usernameValue.length >= 8 && passwordValue.length >= 8) {
        alert("Bạn đá đăng nhập thành công")
        location.href = "https://vodinhviet.github.io/Portfolio/"
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