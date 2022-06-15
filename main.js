function validateForm() {
    let fname = document.getElementById["myForm"]["fname"].value;
    console.log(fname);

    let lname = document.getElementById["myForm"]["lname"].value;
    console.log(lname);

    let email = document.getElementById["myForm"]["email"].value;
    console.log(email);

    let password = document.getElementById["myForm"]["password"].value;
    console.log(password);


    if (fname == " ") {
        alert("First name cannot be empty");
        return false;
    }
    if (lname == " ") {
        alert("Last name cannot be empty");
        return false;
    }
    if (email == " ") {
        alert("Looks like this is not an email");
        return false;
    }
    if (password == " ") {
        alert("Password cannot be empty");
        return false;
    }
}

function validateFirstName(fname) {
    if (fname == null) {
        alert("First name cannot be empty");
        return false;
    }
    if (fname.length > 10) {
        alert("First name cannot exceed 10");
        return false;
    } else {
        return true
    }
}

function validateLastName(lname) {
    if (lname == null) {
        alert("Last name cannot be empty");
        return false;
    }
    if (lname.length > 10) {
        alert("Last name cannot exceed 10")
    } else {
        return true
    }
}

function validateEmail(email) {
    if (email == null) {
        alert("Please fill out your email address");
        return false;
    }
    if (email.length < 10) {
        alert("Looks like this is not an email")
    } else {
        return true
    }
}

function validatePassword(password) {
    if (password == null) {
        alert("Please fill out password");
        return false;
    }
    if (email.length < 10) {
        alert("Password cannot be empty")
    } else {
        return true
    }
}

