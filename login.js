const form = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-button");
const username = document.querySelector("#username-field")
const password = document.querySelector('#password-field')
const validationErrorMsg = document.querySelector('#validation-error-message')
const loginErrorMsg = document.querySelector("#login-error-message");


// check if either username or password field has left blanc on login click and show message error if so (add styles to css selctor)
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!username.value || !password.value) {
     loginErrorMsg.style.visibility = "initial";
    }
    if (!username.value) {
       username.style.borderBottom = "1px solid #ce102d";
    }
    if (!password.value) {
      password.style.borderBottom ="1px solid #ce102d";
    } else {
// check if the hard coded user enters correct info, then redirect
       if (username.value === "user" && password.value === "developer") {
        window.location = "https://www.zertificon.com/";
        } else {
          validationErrorMsg.style.visibility = "initial"
        }

      }
});

