const passwordField = document.querySelector("[name=password]");

passwordField.addEventListener("keyup", (event) => {
    if(!passwordField.validity.valid){
        console.error("passowrd invalid");
        document.getElementById("invalid-passowrd").style.display = "block";
    } else {
         console.info("passowrd valid");
        document.getElementById("invalid-passowrd").style.display = "none";
    }
});

const usernameField = document.querySelector("[name=username]");

usernameField.addEventListener("keyup", (event) => {
    if(!usernameField.validity.valid){
        console.error("username invalid");
        document.getElementById("invalid-username").style.display = "block";
    } else {
         console.info("username valid");
        document.getElementById("invalid-username").style.display = "none";
    }
});
