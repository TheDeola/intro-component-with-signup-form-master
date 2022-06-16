const firstNameEl = document.querySelector('#fname');
const lastNameEl = document.querySelector('#lname');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');

const form = document.querySelector('#myForm');

const checkFname = () => {

    let valid = false;

    // const min = 3,
    //     max = 20;

    const fName = firstNameEl.value.trim();

    if (!isRequired(fName)) {
        showError(firstNameEl, 'First Name cannot be empty');
    }
    // else if (!isBetween(fName.length, min, max)) {
    //     showError(firstNameEl, 'First Name must be between ${min} and ${max} characters')
    // }
    else {
        showSuccess (firstNameEl);
        valid = true;
    }
    return valid;
};

const checkLname = () => {

    let valid = false;

    // const min = 3,
    //     max = 20;

    const lName = lastNameEl.value.trim();

    if (!isRequired(lName)) {
        showError(lastNameEl, 'Last Name cannot be empty');
    }
    // else if (!isBetween(lName.length, min, max)) {
    //     showError(lastNameEl, 'First Name must be between ${min} and ${max} characters')
    // }
    else {
        showSuccess (lastNameEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {

    let valid = false;

    const email = emailEl.value.trim();

    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be empty');
    }
    else if (!isEmailValid(email)) {
        showError(emailEl, 'Looks like this is not an email')
    }
    else {
        showSuccess (emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {

    let valid = false;

    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be empty');
    }
    else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)')
    }
    else {
        showSuccess (passwordEl);
        valid = true;
    }
    return valid;
}

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields

    let isFnameValid = checkFname(),
        isLnameValid = checkLname(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword();

    let isFormValid = isFnameValid &&
        isLnameValid &&
        isEmailValid &&
        isPasswordValid 

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'fname':
            checkFname();
            break;
        case 'lname':
            checkLname();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
    }
}));

// let id = (id) => document.getElementById(id);
// let classes = (classes) => document.getElementsByClassName(classes);

// const emailPattern =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// let firstName = id('firstName'),
//     lastName = id('lastName'),
//     Password = id('password'),
//     form = id('myForm'),
//     errorMsg = classes('error'),
//     errorIcon = classes('errorIcon');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     inputCheck(firstName, 0, 'First Name cannot be empty')
//     inputCheck(lastName, 1, 'Last Name cannot be empty')
//     inputCheck(email, 2, 'Looks like this is not an email')
//     inputCheck(password, 3, 'Password cannot be empty')

// })

// let inputCheck = (id, serial, message) => {
//     if(id.value.trim() === '') {
//         errorMsg[serial].innerHTML = message;
//         errorIcon[serial].style.opacity = '1';
//         id.style.border = '1px solid hsl(0, 100%, 74%)';
//         id.style.color = 'hsl(0, 100%, 74%)'
//     }
// }

