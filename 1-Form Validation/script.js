const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');

//Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success message
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email is valid or not

function checkEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


//Event Listeners
form.addEventListener('submit', e => {
    e.preventDefault();

    if(username.value === ''){
        showError(username, 'Username is required');
    }else{
        showSuccess(username);
    }
    if(email.value === ''){
        showError(email, 'email is required');
    }else if(!checkEmail(email.value)){
        showError(email, 'Email is not valid');
    }
    else{
        showSuccess(email);
    }
    if(password.value === ''){
        showError(password, 'Password is required');
    }else{
        showSuccess(password);
    }
    if(password2.value === ''){
        showError(password2, 'Confirm Your Password');
    }else{
        showSuccess(password2);
    }

});