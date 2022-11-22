
let E= JSON.parse(localStorage.getItem("users")) ;
console.log(E);
function signin(){
    

let log_email = document.getElementById("Email1").value;
console.log(log_email);
    
    
let log_pass = document.getElementById("pass11").value;
console.log(log_pass);

for( let i=0;i<E.length ;i++)
{

if(E[i].email != log_email && E[i].password ==log_pass)
{
    alert("email not correct");
}

if(E[i].email == log_email && E[i].password !=log_pass)
{
    alert("password not correct");
}

if(E[i].email == log_email && E[i].password ==log_pass)
{
   

    document.getElementById("signin").href="../welocme/welcome.html";
    window.localStorage.setItem("email",log_email);

}



}



}

// let log_email = document.getElementById("Email1").value;
// let log_pass = document.getElementById("pass11").value;
// let users=JSON.parse(localStorage.getItem("users")) ;

// function signin(){
//     for(let i=0;i<users.length;i++){
//         if(log_email==users[i].email&&log_pass==users[i].password){

//             document.getElementById("signin").href="../welocme/welcome.html";

//         }
//         if(log_email ==users[i].email&&log_pass!=users[i].password){
//             alert("password not correct");
//         }
//         if(log_email !=users[i].email&&log_pass!=users[i].password ){
//             alert("email not correct");

//         }
//     }
// }
