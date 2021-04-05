// let form = document.getElementsByClassName("error")

// form.addEventListener("focusout", function(event) {
//     // alert("coucou");
//     event.target.style.innerText = "black";
// })
// let btn = document.querySelector('button[type="submit"]');
// btn.onclick = function() {
//     console.log('sss');
// }

function checkForm() {
    // lastName
    let lastName = document.getElementById("lastName");
    // lastName must be not empty or length >= 2
    if (lastName.value == '' || lastName.value.length < 2) {
        let errorLastNameme = document.getElementById("errorLastName");
        errorLastName.innerText = "Attention Le nom est obligatoire et doit contenir au moins 2 caractères"
        // the focus must be on the input 
        lastName.focus();
        // change the className
        lastName.className += " box-red";
        return false;
    }
    else {
        // change the className
        lastName.className = "form-control form-control:focus"
        let errorLastNameme = document.getElementById("errorLastName");
        errorLastName.innerText = ""
    }
    // firstName
    let firstName = document.getElementById("firstName");
    // firstName must be not empty or length >= 2
    if (firstName.value == '' || firstName.value.length < 2) {
        let errorFirstName = document.getElementById("errorFirstName");
        errorFirstName.innerText = "Attention Le prénom est obligatoire et doit contenir au moins 2 caractères"
        // the focus must be on the input 
        firstName.focus();
        // change the className
        firstName.className += " box-red";
        return false;
    }
    else {
        // change the className
        firstName.className = "form-control form-control:focus"
        let errorFirstName = document.getElementById("errorFirstName");
        errorFirstName.innerText = ""
    }

    // message
    let message = document.getElementById("message");
    // empty message is not allowed
    if (message.value == '') {
        let errorMessage = document.getElementById("errorMessage");
        errorMessage.innerText = "Attention Le Message est obligatoire"
        // the focus must be on the input 
        message.focus();
        // change the className
        message.className += " box-red";
        return false;
    }
    else if (message.className.indexOf("box-red") > -1) {
        let errorMessage = document.getElementById("errorMessage");
        errorMessage.innerText = "Attention Le Message contient des mots non permis (sex,sexe,con,connard)"
        // the focus must be on the input 
        message.focus();
        return false;
    }
    else {
        // change the className
        message.className = "form-control form-control:focus"
        let errorMessage = document.getElementById("errorMessage");
        errorMessage.innerText = ""
    }

    // tel
    let tel = document.getElementById("tel");
    let regex = new RegExp(/^(01|02|03|04|05|06|08)[0-9]{8}/gi);

    if (tel.value == '') {
        let errorTel = document.getElementById("errorTel");
        errorTel.innerText = "Attention Numéro de téléphone obligatoire"
        // the focus must be on the input 
        tel.focus();
        // change the className
        tel.className += " box-red";
        return false;
    }
    else if (!regex.test(tel.value)) {
        let errorTel = document.getElementById("errorTel");
        errorTel.innerText = "Attention Numéro de téléphone incorrect"
        // the focus must be on the input 
        tel.focus();
        // change the className
        tel.className += " box-red";
        return false;
    }
    else {
        errorTel.className = "form-control form-control:focus"
        let errorTel = document.getElementById("errorTel");
        errorTel.innerText = ""
    }
    return true;
}

function textArea(max) {
    let reste;
    let message = document.getElementById("message")
    let errorMessage = document.getElementById("errorMessage");
    errorMessage.innerText = max + " Caractère(s) restant(s)"
    // press on the key 
    message.onkeypress = function () {
        // calculate the remain character
        reste = max - message.value.length
        // authorized overrun
        if (reste < 1) {
            return false;
        }
        errorMessage.innerText = reste + " Caractère(s) restant(s)"
    }
    // release on the key
    message.onkeyup = function () {
        // calculate the remain character
        reste = max - message.value.length
        // authorized overrun
        if (reste < 0) {
            return false;
        }
        errorMessage.innerText = reste + " Caractère(s) restant(s)"
        let regex = new RegExp(/\bsex\b|\bsexe\b|\bcon\b|\bconnard\b/gi);
         // not empty value
         if (message.value !== '') {
            if (regex.test(message.value)) {
                message.className += " box-red";
            }
            else {
                message.className = "form-control form-control:focus"
            }
        }
    }
}

textArea(400);

function checkLastname() {
    let lastName = document.getElementById("lastName");
    lastName.addEventListener("keypress", function (event) {
        // keys 0 to 9 are not allowed, max 50 characters
        if ((event.keyCode >= 48 && event.keyCode <= 57) || lastName.value.length >= 50) {
            event.preventDefault();
        }
    });
}

checkLastname();

function checkFirstname() {
    let firstName = document.getElementById("firstName");
    firstName.addEventListener("keypress", function (event) {
        // keys 0 to 9 are not allowed, max 50 characters
        if ((event.keyCode >= 48 && event.keyCode <= 57) || firstName.value.length >= 50) {
            event.preventDefault();
        }
    });
}

checkFirstname();