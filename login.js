const form = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-button");
const username = document.querySelector("#username-field")
const password = document.querySelector('#password-field')
const loginErrorMsg = document.querySelector("#login-error-message");
// const formField = document.querySelectorAll(".login-form-field")
// const placerholderUsername = document.querySelector('input[placeholder]');


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
       if (username.value === "user" && password.value === "developer") {
        // alert("You have successfully logged in.");
        window.location = "https://www.zertificon.com/";
        } else {
          alert("error")
        }

      }
});


// loginButton.addEventListener("submit", (event) => {
//     event.preventDefault();

//     if (username.value === "user" && password.value === "developer") {
//         alert("You have successfully logged in.");
//         location.reload();
//     } else {
//         alert("error");
//     }
// })
