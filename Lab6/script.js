function validateForm() {
	let first_name_field = document.getElementById("firstname");
	let first_name_value = first_name_field.value;

	// Rule 1: First name is required
	if (first_name_value === "") {
		// console.log("First name is required");
		// alert("First name is required");
		let fn_error_span = document.getElementById("fn_error");
		fn_error_span.innerText = "First Name is required";
		// prevent the form submission by returning false
		return false;
	} else {
		let fn_error_span = document.getElementById("fn_error");
		fn_error_span.innerText = "";
	}


	// Rule 2: minimum 3 character
	if (first_name_value.length < 3) {
		let fn_error_span = document.getElementById("fn_error");
		fn_error_span.innerText = "First Name cannot be smaller than 3 characters";
		return false;
	}

	// Rule 3: email must end with aiub.edu
	let email_field_value = document.getElementById("email").value;

	if (!email_field_value.endsWith("aiub.edu")) {
		let email_error_span = document.getElementById("email_error");
		email_error_span.innerText = "Email must end with aiub.edu";
		return false;
	}

	let phone_pattern = "^\d{11}$";
	if (!phone_pattern.test(phone_value)){
		// error
	}

	return true;
}