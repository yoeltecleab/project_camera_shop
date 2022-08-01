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

let email = document.getElementById("email");
let pass = document.querySelector("#Password");


function validateEmail() {
    if (email.value == "") {
        let ev = document.querySelector("#error1");
        ev.innerText = "Please provide your Email!";
        return false;
    }
    else if (email.value.lastIndexOf("@") < 1 || (email.value.lastIndexOf(".") - email.value.lastIndexOf("@")) < 2) {
        let ev = document.querySelector("#error1");
        ev.innerText = "Please put your Email in the correct format!";
        return false;
    }
    else {
        let ev = document.querySelector("#error1");
        ev.innerText = "";
        return true;
    }
}

function validatePassword() {
    if (pass.value == "") {
        let pv = document.querySelector("#error2");
        pv.innerText = "Please provide your password!";
        return false;
    }
    else if (!pass.value.match(/[0-9]/)
        || !pass.value.match(/[A-Z]/)
        || !pass.value.match(/[a-z]/)
        || !pass.value.match(/[!\@\#\$\%\^\&\,]/)
        || pass.value.length < 6) {
        let pv = document.querySelector("#error2");
        pv.innerText = "Please put your password in the correct format! ";
        return false;
    }
    else {
        let pv = document.querySelector("#error2");
        pv.innerText = "";
        return true;
    }
}