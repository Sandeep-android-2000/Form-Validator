const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const Confirm = document.getElementById('confirm');

function showError(input, msg) {
    const formControl = input.parentElement;
    formControl.className = "form-control error"
    const small = formControl.querySelector('small');
    small.innerText = msg;
}
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
function checkEmail(input) {
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    }
    else {
        showError(input, 'Please provide a valid Email ID');
    }
    return re.test(String(email).toLowerCase());
}
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }

}
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function checkLength(input, min, max) {
    if (input.value.length < min)
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`)
        else if(input.value.length > max)
        showError(input, `${getFieldName(input)} must be upto ${max} characters`)
    else {
        showSuccess(input);
    }

}
function checkRequired(inputArray) {
    inputArray.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        }
        else {
            showSuccess(input);
        }
    })
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, email, password, Confirm])
    checkLength(username,4,16)
    checkLength(password,8, 25);
    checkEmail(email);
    checkPasswordsMatch(password, Confirm);

})
// if (username.value === '') {
//     showError(username, 'Username Required Here');
// } else {
//     showSuccess(username);
// }
// if (email.value === '') {
//     showError(email, 'Please Provide A Valid Email ID');
// } else if(!isValidEmail(email.value))
// {
//     showError(email, 'Invalid Email ID provided');
// }
// else {
//     showSuccess(email);
// }

// if (password.value === '') {
//     showError(password, 'Please Provide A Valid Password');
// } else {
//     showSuccess(username);
// }
// if (Confirm.value === '') {
//     showError(Confirm, 'Please Provide A Valid Password');
// } else {
//     showSuccess(Confirm);
// }