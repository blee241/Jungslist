
const form = document.getElementById("form");
const email = document.getElementById("emailInput");
const pw = document.getElementById("passwordInput");
const confirmPw = document.getElementById("confirmPasswordInput");
const locationEl = document.getElementById("locationInput");

//prevent form from submitting to allow us to validate inputs//
form.addEventListener("submit", e => {
    e.preventDefault();

    validateInputs();
});
//creating the error message and border to appear//
const createError = (element, message) => {
    const inputField = element.parentElement;
    const showError = inputField.querySelector(".error");
    showError.innerText = message;
    inputField.classList.add("error");
    inputField.classList.remove("success");
}
//creating the success message and border to appear//
const createSuccess = element => {
    const inputField = element.parentElement;
    const showError = inputField.querySelector(".error");
    showError.innerText = "";
    inputField.classList.add("success");
    inputField.classList.remove("error");
}
//parameters for a valid email address//
const validateEmail = email => {
    const validEmailCharacters = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validEmailCharacters.test(String(email).toLowerCase());
}
//values for the input fields//
const validateInputs =  async() => {
    const emailData = email.value.trim();
    const passwordData = pw.value.trim();
    const confirmPwData = confirmPw.value.trim();
    const locationData = locationEl.value.trim();
    if (emailData === "") {
        createError(email, "Email is Required");
    } else if (!validateEmail(emailData)) {
        createError(email, "Please provide a valid email address");
    } else {
        createSuccess(email);
    }
    if (passwordData === "") {
        createError(pw, "Please provide a password");
    } else {
        createSuccess(pw);
    }
    if (confirmPwData === "") {
        createError(confirmPw, "Please confirm your password");
    } else if (passwordData !== confirmPwData) {
        createError(confirmPw, "Passwords do not match");
    } else {
        createSuccess(confirmPw);
    }
    if (locationData === "") {
        createError(locationEl, "Location is Required");
    } else {
        createSuccess(locationEl);
    }
     
    const postValue = await fetch('/api/signup/sign-up', {
        method: 'POST',
        body: JSON.stringify({
            email: emailData,
            user_password: passwordData,
            buyer_location: locationData,

        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if(postValue.ok) {
        alert("You have created a new account!");
    } else { 
        alert('Something went wrong');
    }

}