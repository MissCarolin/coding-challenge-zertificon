const form = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-button");
const username = document.querySelector("#username-field")
const password = document.querySelector('#password-field')
const validationErrorMsg = document.querySelector('#validation-error-message')
const loginErrorMsg = document.querySelector("#login-error-message");
const passwordIcon = document.querySelector('.preview_icon')
const eyeIcon = document.querySelector('.fa');
console.log(passwordIcon)


// check if either username or password field has left blanc on login click and show message error if so (add styles to css selctor)
const verifyUserInput = () => {
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
};

form.addEventListener('submit', verifyUserInput);


//show or hide password
const togglePassword = () => {
  if (password.type === 'password') {
    password.type = 'text'

    eyeIcon.classList.remove('fa-eye')
    eyeIcon.classList.add('fa-eye-slash')
  } else {
    password.type = 'password'

    eyeIcon.classList.add('fa-eye')
    eyeIcon.classList.remove('fa-eye-slash')
  }
}

passwordIcon.addEventListener('click', togglePassword);
