var users = [];
console.log(localStorage.getItem("users"));

if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
    console.log(users);
}


var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var emailAddress = document.getElementById("Email");
var password = document.getElementById("pass1");
var confPass = document.getElementById("pass2");
var birth = document.getElementById("Birth");
var regButton = document.getElementById("reg");
var message = document.querySelector(".message");
message.style.display = "none"


//form validation
document.forms[0].onsubmit = function (e) {
    e.preventDefault();

    //check if the user has an acount 
    if (isExist()) {
        document.getElementById("already-registered").style.display = "block"
        return;
    }

    //check if the user exist 
    function isExist() {

        if (users.length > 0) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == emailAddress.value) {
                    return true
                }
            }
            return false;
        }

    }

    //validate user password and email
    if (password.value === confPass.value) {
        message.style.display = "none";
        if (EmailValidation(emailAddress.value)) {
            var user = {
                fname: fname.value,
                lname: lname.value,
                email: emailAddress.value,
                Birth: birth.value,
                password: password.value
            }

            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

        }
        else {
            alert("Sorry! an invalid email!");
        }

    }
    else {
        message.style.display = "block";
    }
}


//email validation
function EmailValidation(enteredEmail) {
    var mail_format = /^w+([.-]?w+)@w+([.-]?w+)(.w{2,3})+$/;
    if (enteredEmail.match(enteredEmail)) {
        return true;
    }
    Else
    {

        return false;
    }
   
}

