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

const emailfield = document.querySelector("[name=email]");

emailfield.addEventListener("keyup", (event) => {
    if(!emailfield.validity.valid){
        console.error("email invalid");
        document.getElementById("invalid-email").style.display = "block";
    } else {
         console.info("email valid");
        document.getElementById("invalid-email").style.display = "none";
    }
});

const phonenumberfield = document.querySelector("[name=phonenumber]");

phonenumberfield.addEventListener("keyup", (event) => {
    if(!phonenumberfield.validity.valid){
        console.error("phonenumber invalid");
        document.getElementById("invalid-phonenumber").style.display = "block";
    } else {
         console.info("phonenumber valid");
        document.getElementById("invalid-phonenumber").style.display = "none";
    }
});

const tanggalfield = document.querySelector("[name=tanggal]");

tanggalfield.addEventListener("keyup", (event) => {
    if(!tanggalfield.validity.valid){
        console.error("tanggal invalid");
        document.getElementById("invalid-tanggal").style.display = "block";
    } else {
         console.info("tanggal valid");
        document.getElementById("invalid-tanggal").style.display = "none";
    }
});
