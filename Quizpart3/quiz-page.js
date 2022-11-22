let radiox = document.getElementsByName("option");
let answer = document.getElementsByTagName("label");
var user_answer;
var numberof_Question3=10;
var score3=0;
var seconds=40;
var myQuestions3 = [
    {
    question: "Q11.Which number should be there next in this series? 25, 24, 22, 19, 15",
    answers: {
        a: "14",
        b: "12",
        c: "10",
        d: "8"

    },
    correctAnswer: "10"
},
{
    question: "Q12.Which one of the following teams has not won the European Championship?",
    answers: {
        a: "Denmark",
        b: "Belgium",
        c: "Greece",
        d: "Romain"

    },
    correctAnswer: "Belgium"
},
{
    question: "Q13.Who is the only player to win the Champions League with three different clubs (Ajax, Real Madrid, AC Milan)?",
    answers: {
        a: 'Clarence Seedorf',
        b: 'van Basten',
        c: 'Gunnar Nordahl',
        d: 'Frank Rijkaard'
    },
    correctAnswer: 'Clarence Seedorf'
},
{
    question: "Q14.Messi has won a record number of Ballon d'Or awards - how many? ",
    answers: {
        a: 'Six Ballon d\'Or awards',
        b: 'one Ballon d\'Or awards',
        c: 'seven Ballon d\'Or awards',
        d: 'three Ballon d\'Or awards'
    },
    correctAnswer: 'seven Ballon d\'Or awards'
},
{
    question: "Q15. With three titles each, which two teams have won the most European Championships?",
    answers: {
        a: "Germany and Spain",
        b: 'one Ballon dOr awards',
        c: "itally and england",
        d: "france and jordan"

    },
    correctAnswer: 'Germany and Spain'
},
{
    question: "Q16.how long is a match of football? ",
    answers: {
        a: '80 minutes',
        b: '1 hour and a half',
        c: '60 minutes',
        d: '100 minutes'
    },
    correctAnswer: '1 hour and a half'
},

{
    question: "Q17.Which club has won the most Champions League titles? ",
    answers: {
        a: 'Real Madrid',
        b: 'Barcelona',
        c: 'Juventus',
        d: 'Chelsea'
    },
    correctAnswer: 'Real Madrid'
},
{
    question: "Q18.Which footballer has won the Premier League with both Leicester City and Manchester City? ",
    answers: {
        a: 'Riyad Mahrez',
        b: 'haland',
        c: 'mohammad salah',
        d: 'DE bruyne'
    },
    correctAnswer: "Riyad Mahrez"
}, 

{
    question: "Q19.how many players start on the football pitch?",
    answers: {
        a: '22 players',
        b: '11 platers',
        c: '9 players',
        d: '12 players'
    },
    correctAnswer: '11 platers'
},
{
    question: "Q20.how large is a goalkeepers box where he/she can pick up the ball? ",
    answers: {
        a: '18 yards',
        b: '12 yards',
        c: '25 yards',
        d: '30 yards'
    },
    correctAnswer: '18 yards'
}
];

myCounter = 0;
changeQuestion_insection3();
function changeQuestion_insection3() {
    seconds=40;
    for(let i=0;i<answer.length;i++){

        answer[i].classList.remove("active");
    }
    document.getElementById("ques").innerHTML = myQuestions3[myCounter].question;
    document.getElementById("labelans1").innerHTML = myQuestions3[myCounter].answers.a;
    document.getElementById("labelans2").innerHTML = myQuestions3[myCounter].answers.b;
    document.getElementById("labelans3").innerHTML = myQuestions3[myCounter].answers.c;
    document.getElementById("labelans4").innerHTML = myQuestions3[myCounter].answers.d;
    

    document.getElementById("answer1").checked=false;
    document.getElementById("answer2").checked=false;
    document.getElementById("answer3").checked=false;
    document.getElementById("answer4").checked=false;
    numberof_Question3++;
    myCounter ++;
    if (myCounter==myQuestions3.length){
        document.getElementById("end").style.display='block';
        document.getElementById("next").style.display='none';
    }
} 
var score=localStorage.getItem("score2");



function chhecked_questionin_section3() {
    
    for (let i = 0; i < radiox.length; i++) {
        if (radiox[i].checked) {
            user_answer=answer[i].innerHTML;
            answer[i].classList.add("active");

        }
        else{
            answer[i].classList.remove("active");
        }
        sessionStorage.setItem("you'r answer on Q"+ numberof_Question3,user_answer);

               
    }

    
}
function isChecked_onsection3(){
    if (radiox[0].checked ==false &&radiox[1].checked ==false &&radiox[2].checked ==false&&radiox[3].checked ==false  ){
       alert("please select your answer");
    }
    else{
        changeQuestion_insection3() 
    }}

    var scorenumberq3=11;
function calcscore3(){
    for(let i=0;i<myQuestions3.length;i++){
        if(window.sessionStorage.getItem("you'r answer on Q"+scorenumberq3)==myQuestions3[i].correctAnswer){
            score3++;
        }
        localStorage.setItem("score3", score3)
        scorenumberq3++;

    }
}

var countdiv = document.getElementById("countdown");
secondpass();
        countdown = setInterval(function () {

            "use strict";
            secondpass();
        }, 1000);

        function secondpass() {
            "use strict";
            // var minutes =math.floor(seconds/60);
            var minutes = Math.floor(seconds / 60);
            let remseconds = seconds % 60;
            countdiv.innerHTML = minutes + ":" + remseconds;
            if (seconds > 0) {
                seconds = seconds - 1;
            }
            else {
                seconds = 40;
                document.getElementById("answer4").checked = true;
                changeQuestion_insection3()

            }

        }

