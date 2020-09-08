const form = document.querySelector("#login-form");
const username = document.querySelector("#username-field")
const password = document.querySelector('#password-field')
const loginErrorMsg = document.querySelector("#login-error-message");

form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(username.value)
    if (!username.value || !password.value) {
     loginErrorMsg.style.visibility = "initial";
    }
});
