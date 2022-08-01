const body = document.querySelector("body");
const darkmode = document.querySelector(".fa-moon");
const lightmode = document.querySelector(".fa-sun");

function setDarkMode() {
    body.setAttribute('style', 'background-image: url("../Media/Background_Dark.jpg")');
}
function setLightMode() {
    body.setAttribute('style', 'background-image: url("../Media/Background_Image.jpg")');
}
darkmode.addEventListener("click", setDarkMode);
lightmode.addEventListener("click", setLightMode);


let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let pass1 = document.querySelector("#Password");
let pass2 = document.querySelector("#CPassword");


function validatefName() {
    if (fname.value == "") {
        let fnv = document.querySelector("#error1");
        fnv.innerText = "Please provide your First Name!";
        return false;
    }
    else {
        let fnv = document.querySelector("#error1");
        fnv.innerText = "";
        return true;
    }
}

function validatelName() {

    if (lname.value == "") {
        let lnv = document.querySelector("#error2");
        lnv.innerText = "Please provide your Last Name!";
        return false;
    }
    else {
        let lnv = document.querySelector("#error2");
        lnv.innerText = "";
        return true;
    }
}

function validateEmail() {
    if (email.value == "") {
        let ev = document.querySelector("#error3");
        ev.innerText = "Please provide your Email!";
        return false;
    }
    else if (email.value.lastIndexOf("@") < 1 || (email.value.lastIndexOf(".") - email.value.lastIndexOf("@")) < 2) {
        let ev = document.querySelector("#error3");
        ev.innerText = "Please put your Email in the correct format!";
        return false;
    }
    else {
        let ev = document.querySelector("#error3");
        ev.innerText = "";
        return true;
    }
}

function validatePassword() {
    if (pass1.value == "") {
        let pv = document.querySelector("#error4");
        pv.innerText = "Please provide your password!";
        return false;
    }
    else if (!pass1.value.match(/[0-9]/)
        || !pass1.value.match(/[A-Z]/)
        || !pass1.value.match(/[a-z]/)
        || !pass1.value.match(/[!\@\#\$\%\^\&\,]/)
        || pass1.value.length < 6) {
        let pv = document.querySelector("#error4");
        pv.innerText = "Please put your password in the correct format! ";
        return false;
    }
    else {
        let pv = document.querySelector("#error4");
        pv.innerText = "";
        return true;
    }
}

function validatePassword2() {
    if (pass2.value != pass1.value) {
        let pv2 = document.querySelector("#error5");
        pv2.innerHTML = "Your password do not match!";
        return false;
    }
    else {
        let pv2 = document.querySelector("#error5");
        pv2.innerText = "";
        return true;
    }
}

function validateCheckbox() {
    let check = document.getElementById("checkbox");
    if (!check.checked) {
        let cv = document.querySelector("#error6");
        cv.innerHTML = "You must agree to out terms and conditions to sign up!";
        check.focus();
        return false;
    }
    else {
        return true;
    }
}

fname.addEventListener("blur", validatefName);
lname.addEventListener("blur", validatelName);
email.addEventListener("blur", validateEmail);
pass1.addEventListener("blur", validatePassword);
pass2.addEventListener("blur", validatePassword2);
check.addEventListener("submit", validateCheckbox);








