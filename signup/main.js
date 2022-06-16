let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

const emailPattern =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;



let firstName = id('firstName'),
    lastName = id('lastName'),
    Password = id('password'),
    form = id('myForm'),
    errorMsg = classes('error'),
    errorIcon = classes('errorIcon');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    inputCheck(firstName, 0, 'First Name cannot be empty')
    inputCheck(lastName, 1, 'Last Name cannot be empty')
    inputCheck(email, 2, 'Looks like this is not an email')
    inputCheck(password, 3, 'Password cannot be empty')

})

let inputCheck = (id, serial, message) => {
    if(id.value.trim() === '') {
        errorMsg[serial].innerHTML = message;
        errorIcon[serial].style.opacity = '1';
        id.style.border = '1px solid hsl(0, 100%, 74%)';
        id.style.color = 'hsl(0, 100%, 74%)'
    }
}

