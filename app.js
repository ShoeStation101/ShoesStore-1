// JavaScript source code
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');


menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

//modal items
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main-btn');
const signupBtn = document.querySelector('.signup-Btn');
const closeBtn = document.querySelector('.close-btn');

//click events
signupBtn.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    modal.style.display = 'block';
});
if(openBtn !== null){
    openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});
}
if(closeBtn !== null){
    closeBtn.addEventListener('click', ()=>{
    modal.style.display = 'none';
});
}

window.addEventListener('click', (e) =>{
    if(e.target === modal) {
        modal.style.display = 'none';
    }
})

// form validation
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

//show error message
function showError(input, message){
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';
    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

//Show valid message
function showValid(input){
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}
//Get fieldname

function getFieldName(input){
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}
// check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showValid(input);
    }
}

//check required field
function checkRequired(inputArr){
    inputArr.forEach(function(input) {
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`);
        }else{
            showValid(input);
        }
    });
}
//check passwords match
function passwordMatch(input1, inptu2){
    if(input1.value !== inptu2.value ){
        showError(input2, 'Passwords do not match');
    }
}

//Event Listeners
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkRequired([name,email,password,passwordConfirm]);
    checkLength(name, 3, 30);
    checkLength(password, 8,25);
    checkLength(passwordConfirm,8 ,25);
    passwordMatch(password, passwordConfirm);
})
