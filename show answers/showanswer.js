


let userAnswer=document.getElementsByClassName("your-answer");
for (let i=1;i<userAnswer.length+1;i++){
    document.getElementsByClassName("your-answer")[i-1].innerHTML+=sessionStorage.getItem("you'r answer on Q"+i)
}
