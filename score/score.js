
var score =
  Number(window.localStorage.getItem("score1")) +
  Number(window.localStorage.getItem("score2")) +
  Number(window.localStorage.getItem("score3"));

window.localStorage.setItem("score", score);
let yourscore = localStorage.getItem("score");
console.log(localStorage.getItem("score"));
var score_persentage = (yourscore/20*100);
if (score_persentage < 50) {
  document.getElementById("fail").style.display = 'block';
}
else {
  document.getElementById("pass").style.display = 'block';
}

document.getElementsByClassName("rating")[0].innerHTML = score_persentage  + "%";
const ratings = document.querySelectorAll(".rating");
window.localStorage.setItem("You'r score", score_persentage  + "%");



// Iterate over all rating items
ratings.forEach((rating) => {
  // Get content and get score as an int
  const ratingContent = rating.innerHTML;
  const ratingScore = parseInt(ratingContent, 10);

  // Define if the score is good or bad according to its value
  const scoreClass =
    ratingScore < 50 ? "bad" : "good";

  // Add score class to the rating
  rating.classList.add(scoreClass);

  // After adding the class, get its color
  const ratingColor = window.getComputedStyle(rating).backgroundColor;

  // Define the background gradient according to the score and color
  const gradient = `background: conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;

  // Set the gradient as the rating background
  rating.setAttribute("style", gradient);

  // Wrap the content in a tag to show it above the pseudo element that masks the bar
  rating.innerHTML = `<span>${ratingScore} ${ratingContent.indexOf("%") >= 0 ? "<small>%</small>" : ""
    }</span>`;
});



// let nameofusers=JSON.parse(localStorage.getItem("users"));
// // console.log(nameofusers);
// names=[]
// for(let i=0;i<nameofusers.length;i++){
//   names[i]=nameofusers[i].fname

// }

// console.log(names);
// let score=localStorage.getItem("score");
// window.localStorage.setItem("score"+names[names.length],score);
// for(let i=0;i<names.length;i++){
//        console.log(window.localStorage.getItem("score"+names[i]));


// }
let namesusers=JSON.parse(localStorage.getItem("users"));

window.localStorage.setItem("score"+namesusers[namesusers.length-1].fname,score)
console.log(namesusers[namesusers.length-1].fname);

