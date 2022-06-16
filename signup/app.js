const fname = document.getElementById('fname');
const lname = document.getElementById('lname');

const email = document.getElementById('email');
const password = document.getElementById('password');
// const btn = document.getElementById('submit')

const form = document.getElementById('form')



form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
})

const checkInput = () =>{
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();

    //VALIDATE THE INPUTS
    //First name
    if (fnameValue === '') {
        setError(fname, 'First Name cannot be empty');

    } else {
        setSuccess(fname);
    }

    //Last name
    if (lnameValue === '') {
        setError(lname, 'Last Name cannot be empty');

    } else {
        setSuccess(lname);
    }

    //Email
    if (emailValue === '')  {
        setError (email, 'Email cannot be empty')
    } else if (!isEmail(emailValue)) {
        setError (email, 'Looks like this is not an email')
    } else {
        setSuccess(email);
    }

    //Password
    if (passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else {
        setSuccess(password);
    }
}

const setError = (input, message) =>{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

const setSuccess =(input)=>{
    const formControl = input.parentElement;
    formControl.className='form-control success'
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

