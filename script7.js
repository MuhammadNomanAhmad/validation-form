const form = document.querySelector('form');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const dateInput = document.getElementById('birthDate');
const genderInput = document.getElementById('gender');


const showError = (field,errorText)=>{
    field.classList.add('error');
    const errorElement = document.createElement('small');
    errorElement.classList.add('error-text');
    errorElement.innerHTML= errorText;
    field.closest('.form-group').appendChild(errorElement)
}

const handleFormData = (e)=>{
    e.preventDefault();

    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const password =passwordInput.value.trim();
    const date  = dateInput.value;
    const gender = genderInput.value;




    const fullNamePattern = /.+/;
    const emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /.+/;
    const datePattern = /.+/;
const genderPattern = /.+/;

document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
     document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

if(!fullNamePattern.test(fullName)){
    showError(fullNameInput,"Enter Your Name");

}
if(!emailPattern.test(email)){
    showError(emailInput,"Enter Your Mail")
}
if(!passwordPattern.test(password)){
    showError(passwordInput,"Enter Password");
}
if(!datePattern.test(date)){
    showError(dateInput,"Select Your Date of Birth");
}
if(!genderPattern.test(gender)){
    showError(genderInput,"Select Gender");
}


const errorInput = document.querySelectorAll('.form-group .error');
if(errorInput.length > 0) return;

form.submit()




}

form.addEventListener('submit',handleFormData)