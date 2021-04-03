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
 
   if (lastName.value == '' || lastName.value.length < 2) {
        let errorLastNameme = document.getElementById("errorLastName");
        errorLastName.innerText = "Attention Le nom est obligatoire et doit contenir au moins 2 caractères"
        lastName.focus();
        lastName.className += " box-red";
        return false;
    }
    else {
        lastName.className = "form-control form-control:focus"
        let errorLastNameme = document.getElementById("errorLastName");
        errorLastName.innerText = ""
    }
 
    let firstName = document.getElementById("firstName");
    if (firstName.value == '' || firstName.value.length < 2) {
        let errorFirstName = document.getElementById("errorFirstName");
        errorFirstName.innerText = "Attention Le prénom est obligatoire et doit contenir au moins 2 caractères"
        firstName.focus();
        firstName.className += " box-red";
        return false;
    }
    else {
        firstName.className = "form-control form-control:focus"
        let errorFirstName = document.getElementById("errorFirstName");
        errorFirstName.innerText = ""
    }

    let email = document.getElementById("email");
    if (email.value == '') {
        let errorEmail = document.getElementById("errorEmail");
        errorEmail.innerText = "Attention L'adresse Mail est obligatoire"
        email.focus();
        email.className += " box-red";
        return false;
    }
    else {
        errorEmail.className = "form-control form-control:focus"
        let errorEmail = document.getElementById("errorEmail");
        errorEmail.innerText = ""
    }

    let message = document.getElementById("message");
    // alert(message.value);
    if (message.value === '') {
        let errorMessage = document.getElementById("errorMessage");
        errorMessage.innerText = "Attention Le Message est obligatoire"
        message.focus();
        message.className += " box-red";
        return false;
    }
    else {
        message.className = "form-control form-control:focus"
        let errorMessage = document.getElementById("errorMessage");
        errorMessage.innerText = ""
    }

    return true;
}

let words = ["sexe", "sex", "con", "connard"];
function textArea(max) {
    let reste;
    let message = document.getElementById("message")
    let errorMessage = document.getElementById("errorMessage");
    errorMessage.innerText = max + " Caractère(s) restant(s)"
    message.onkeypress = function () {
        reste = max - message.value.length
        if (reste < 1) {
            return false;
        }
        errorMessage.innerText = reste + " Caractère(s) restant(s)"
    }
    message.onkeyup = function () {
        reste = max - message.value.length
        if (reste < 0) {
            return false;
        }
        errorMessage.innerText = reste + " Caractère(s) restant(s)"

        if (message.value !== '') {
            for (let i=0 ; i < words.length; i++) {
                if (message.value.indexOf(words[i]) > -1) {
                    message.className += " box-red";
                    break;
                }
                else {
                    message.className = "form-control form-control:focus"
                }
            }
        }
    }
}

textArea(400);

function checkLastname() {
    let lastName = document.getElementById("lastName");
    lastName.addEventListener("keypress", function(event) {
        if ((event.keyCode >= 48 && event.keyCode <= 57) || lastName.value.length >= 50) {
            event.preventDefault();
        }
    });
}

checkLastname();

function checkFirstname() {
    let firstName = document.getElementById("firstName");
    firstName.addEventListener("keypress", function(event) {
        if ((event.keyCode >= 48 && event.keyCode <= 57) || firstName.value.length >= 50) {
            event.preventDefault();
        }
    });
}

checkFirstname();