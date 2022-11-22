
let radiox = document.getElementsByName("option");
let answer = document.getElementsByTagName("label");
var numberof_Question2 = 5;
var myCounter2 = 0;
let userAnswer;
var score2 = 0;
var seconds = 40;
var myQuestions2 = [


    {
        question: "Q6.Which team lost their first three World Cup finals?",
        answers: {
            a: 'Brazil',
            b: 'Holland (The Netherlands)',
            c: 'Argentina',
            d: 'France'
        },
        correctAnswer: 'Holland (The Netherlands)'
    },
    {
        question: "Q7.Name a country has won the World Cup twice?",
        answers: {
            a: "England",
            b: "Croatia",
            c: "Italy",
            d: "France"

        },
        correctAnswer: "France"
    },
    {
        question: "Q8.I've worn numbers 7, 17, 28 and 9 in my career, playing my football across, England, Spain, Italy and Portugal. who am I?",
        answers: {
            a: "Raul",
            b: "Beckham",
            c: "Cristiano Ronaldo",
            d: "Cavani "

        },
        correctAnswer: "Cristiano Ronaldo"
    },
    {
        question: "Q9.How many times has Rooney won the title of top scorer in the Premier League?",
        answers: {
            a: "Once",
            b: "Twice",
            c: "Three Times",
            d: "Never"

        },
        correctAnswer: "Never"
    },
    {
        question: "Q10.Two people can make two bicycles in 2 hours. How many people are required to make 12 bicycles in 6 hours?",
        answers: {
            a: "6",
            b: "4",
            c: "3",
            d: "2"

        },
        correctAnswer: "2"
    }
];


changeQuestion_insection2();
function changeQuestion_insection2() {
    seconds = 40;
    for (let i = 0; i < answer.length; i++) {

        answer[i].classList.remove("active");
    }

    document.getElementById("ques").innerHTML = myQuestions2[myCounter2].question;
    document.getElementById("labelans1").innerHTML = myQuestions2[myCounter2].answers.a;
    document.getElementById("labelans2").innerHTML = myQuestions2[myCounter2].answers.b;
    document.getElementById("labelans3").innerHTML = myQuestions2[myCounter2].answers.c;
    document.getElementById("labelans4").innerHTML = myQuestions2[myCounter2].answers.d;


    document.getElementById("answer1").checked = false;
    document.getElementById("answer2").checked = false;
    document.getElementById("answer3").checked = false;
    document.getElementById("answer4").checked = false;
    numberof_Question2++;
    myCounter2++;

    if (myCounter2 == myQuestions2.length) {
        document.getElementById("end").style.display = 'block';
        document.getElementById("next").style.display = 'none';
    }
}



function user_checkedsection2() {

    for (let i = 0; i < radiox.length; i++) {
        if (radiox[i].checked) {
            userAnswer = answer[i].innerHTML;
            answer[i].classList.add("active");

        }
        else {
            answer[i].classList.remove("active");

        }
    }
    sessionStorage.setItem("you'r answer on Q" + numberof_Question2, userAnswer);
}


function isChecked_onsection2() {
    if (radiox[0].checked == false && radiox[1].checked == false && radiox[2].checked == false && radiox[3].checked == false) {
        alert("please select your answer");
    }
    else {
        changeQuestion_insection2()
    }
}

var scorenumberq2 = 6;
function calcscore2() {
    for (let i = 0; i < myQuestions2.length; i++) {
        if (window.sessionStorage.getItem("you'r answer on Q" + scorenumberq2) == myQuestions2[i].correctAnswer) {
            score2++;
        }
        localStorage.setItem("score2", score2)
        scorenumberq2++;

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
                document.getElementById("answer2").checked = true;
                changeQuestion_insection2();

            }

        }



