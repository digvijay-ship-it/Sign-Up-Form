const passwordInput = document.getElementById("Password");
const confirmPasswordInput = document.getElementById("confirm_Password");

function validatePassword() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        //set border red
        passwordInput.style.border = "solid 5px rgb(206,97,97)";
        confirmPasswordInput.style.border = "solid 5px rgb(206,97,97)";
    } else {
        // set border yellow
        passwordInput.style.border = "solid 5px rgb(248, 215, 71)";
        confirmPasswordInput.style.border = "solid 5px rgb(248, 215, 71)";
    }
}

confirmPasswordInput.addEventListener("input", validatePassword);
