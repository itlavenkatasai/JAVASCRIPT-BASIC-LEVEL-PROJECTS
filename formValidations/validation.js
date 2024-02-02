const form = document.getElementById("form");
const uname = document.getElementById("uname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const tandc = document.getElementById("tc");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
});

function validate() {
    let unameValue = uname.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let cpasswordValue = cpassword.value.trim();
    let tandcValue = tandc.value.trim();

    if (unameValue === '') {
        setError(uname, 'user name cannot be empty');
    }
    else if (unameValue.length < 3) {
        setError(uname, "user name should be more than 3 letters");
    }
    else {
        setSuccess(uname);
    }
    if (emailValue === '') {
        setError(email, "email cannot be empty");
    }
    else if (!emailCheck(emailValue)) {
        setError(email, "Enter valid email");
    }
    else {
        setSuccess(email);
    }
    if (passwordValue === '') {
        setError(password, "password cannot be empty");
    }
    else if (passwordValue.length < 8) {
        setError(password, "password should be minimum 8 characters");
    }
    else {
        setSuccess(password);
    }
    if (cpasswordValue === '') {
        setError(cpassword, "confirm password cannot be empty");
    }
    else if (cpasswordValue != passwordValue) {
        setError(cpassword, "confirm password match with above password");
    }
    else {
        setSuccess(cpassword)
    }
    if (!tandcValue.checked) {
        setError(tandc, "click on agree terms and conditions");
    }
    else {
        setSuccess(tandc);
    }

}


function setError(input,message){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    small.innerText = message
    parent.classList.add('error')
    parent.classList.remove('success')
}
function setSuccess(input){
    let parent = input.parentElement;
    parent.classList.add('success')
    parent.classList.remove('error')
}
function emailCheck(input) {
    let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let valid = emailReg.test(input)
    return valid
}