// let form = document.getElementsByClassName("error")

// form.addEventListener("focusout", function(event) {
//     // alert("coucou");
//     event.target.style.innerText = "black";
// })

function checkForm() {
    let lastName = document.getElementById("lastName");
    if (lastName.value == '') {
        let errorLastNameme = document.getElementById("errorLastName");
        errorLastName.innerText = "Attention Le nom est obligatoire"
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
    if (firstName.value == '') {
        let errorFirstName = document.getElementById("errorFirstName");
        errorFirstName.innerText = "Attention Le prénom est obligatoire"
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
    alert(message.value);
    if (message.value === '') {
        let errorMessage = document.getElementById("errorMessage");
        errorMessage.innerText = "Attention Le Message est obligatoire"
        message.focus();
        message.className += " box-red";
        return false;
    }
    else {
        errorMessage.className = "form-control form-control:focus"
        let errorMessage = document.getElementById("errorMessage");
        errorMessage.innerText = ""
    }
    return true;
}



// let btn = document.querySelector('button[type="submit"]');
// btn.onclick = function() {
//     console.log('sss');
// }

