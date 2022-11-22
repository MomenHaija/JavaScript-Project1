let E = JSON.parse(localStorage.getItem("users"));

for (let i = 0; i < E.length; i++){

       document.getElementById("pp").innerHTML = E[i].fname;
}






function takedquiz(){
let email=window.localStorage.getItem("email");

for(let i=0;i<E.length;i++){
       if(email==E[i].email){
              if(window.localStorage.getItem("score"+E[i].fname)!=null){
                     document.getElementById("destnation").href="../score/score.html";
              }
       }
}
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
