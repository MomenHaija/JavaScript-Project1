
var score1 = 0;
let radiox = document.getElementsByName("option");
let answer = document.getElementsByTagName("label");
var myCounter = 0;
var numberof_Question1=0;
var seconds=40;

var myQuestions = [
    {
        question: " Q1.How old was Pele when he scored in his first Football World Cup final?",
        answers: {
            a: "17",
            b: "18",
            c: "19",
            d: "20"

        },
        correctAnswer: "17"
    },
    {
        question: "Q2.Player known as \"الحكومه\"?",
        answers: {
            a: "Cristiano Ronaldo",
            b: "Leo Messi",
            c: "Kareem Binzima",
            d: "Luka Modric"

        },
        correctAnswer: "Kareem Binzima"
    },
    {
        question: "Q3.This voice returns to ?",
        answers: {
            a: "Mohammad Sawalha",
            b: "Hafeed Darraje",
            c: "Esam Shawaly",
            d: "Fares Auad"

        },
        correctAnswer: "Hafeed Darraje"
    },
    {
        question: "Q4.How many goals did Real Madrid receive in its match against Barcelona in 2009?",
        answers: {
            a: "16 goals",
            b: "6 goals",
            c: "8 goals",
            d: "10 goals"

        },
        correctAnswer: "6 goals"
    },
    {
        question: "Q5.In what year was the Football World Cup first held?",
        answers: {
            a: "1926",
            b: "1930",
            c: "1934",
            d: "1938"

        },
        correctAnswer: "1930"
    }
];


shownextQuestion();

function shownextQuestion() {
    seconds = 40;
            
    if (myCounter == 2) {
        document.getElementById("play").style.display = "block";

    }
    else {
        document.getElementById("play").style.display = "none";
    }

    for(let i=0;i<answer.length;i++){

        answer[i].classList.remove("active");
    }

    document.getElementById("ques").innerHTML = myQuestions[myCounter].question;
    document.getElementById("labelans1").innerHTML = myQuestions[myCounter].answers.a;
    document.getElementById("labelans2").innerHTML = myQuestions[myCounter].answers.b;
    document.getElementById("labelans3").innerHTML = myQuestions[myCounter].answers.c;
    document.getElementById("labelans4").innerHTML = myQuestions[myCounter].answers.d;


    document.getElementById("answer1").checked = false;
    document.getElementById("answer2").checked = false;
    document.getElementById("answer3").checked = false;
    document.getElementById("answer4").checked = false;

    numberof_Question1++;
    myCounter ++;
    if (myCounter == myQuestions.length) {
        document.getElementById("end").style.display = 'block';
        document.getElementById("next").style.display = 'none';
    }
}

function user_checked(){

    for (let i = 0; i < radiox.length; i++) {
        if (radiox[i].checked) {
            let useranswer = answer[i].innerHTML;
            answer[i].classList.add("active");
            sessionStorage.setItem("you'r answer on Q" + myCounter,useranswer);
        }
        else{
            answer[i].classList.remove("active");

        }
    }
}


function isChecked() {
    if (radiox[0].checked == false && radiox[1].checked == false && radiox[2].checked == false && radiox[3].checked == false) {
        alert("please select your answer");
    }
    else {
        shownextQuestion()
    }
}


var scorenumberq1=1;
function calcscore1(){
    for(let i=0;i<myQuestions.length;i++){
        if(window.sessionStorage.getItem("you'r answer on Q"+scorenumberq1)==myQuestions[i].correctAnswer){
            score1++;
        }
        localStorage.setItem("score1", score1)
        scorenumberq1++;

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
                document.getElementById("answer1").checked = true;
                shownextQuestion();

            }

        }


        let play = document.getElementById("play");
        function playMusic() {
            
            let audio = new Audio("360P.mp3");
            audio.play();
        }
        play.addEventListener("click", playMusic);
        