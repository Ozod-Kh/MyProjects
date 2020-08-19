function submitForun(event) {
	event.preventDefault();
	//Names
	let fname = document.getElementById('fname');
	let lname = document.getElementById('lname');
	if (fname.value === '') {
		document.getElementById('errname').innerHTML = 'Please enter your first name';
	} else {
		document.getElementById('errname').innerHTML = '';
	}

	if (lname.value === '') {
		document.getElementById('errlname').innerHTML = 'Please enter your last name';
	}
	//country
	let country = document.getElementById('country');
	if (country.value === 'selected') {
		document.getElementById('errcount').innerHTML = 'Please choose your country';
	}

	// Birthday
	var bdate = document.getElementById('bdate');
	if (bdate.value === '') {
		document.getElementById('errbd').innerHTML = 'Please choose your birthday';
	}

	//Gender
	var male = document.getElementById('male');
	var female = document.getElementById('female');
	var other = document.getElementById('other');

	if (male.value === true) {
		female.value = false;
		other.value = false;
	}

	//Emails
	event.preventDefault();
	let email = document.getElementById('email');
	let email1 = document.getElementById('email1');
	if (email.value !== email1.value) {
		document.getElementById('erremail').innerHTML = 'Your email does not match';
	}
	let check = email.value.includes('@' && '.');

	if (check === false) {
		document.getElementById('erremail').innerHTML = 'Please enter a valid email address';
	}

	//Passwords
	let password = document.getElementById('password');
	let password1 = document.getElementById('password1');
	if (password.value === '' || password1.value === '') {
		document.getElementById('errpas').innerHTML = 'Please create your password';
	} else if (password.value !== password1.value) {
		document.getElementById('errpas').innerHTML = 'Your passwords does not match';
	}
}
