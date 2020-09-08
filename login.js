const form = document.querySelector("#login-form");
const username = document.querySelector("#username-field")
const password = document.querySelector('#password-field')
const loginErrorMsg = document.querySelector("#login-error-message");
const formField = document.querySelectorAll(".login-form-field")


form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!username.value || !password.value) {
     loginErrorMsg.style.visibility = "initial";
    }
    if (!username.value) {
       username.style.borderBottom ="1px solid #ce102d";
    }
    if (!password.value) {
      password.style.borderBottom ="1px solid #ce102d";
    }
});

