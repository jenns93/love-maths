

   var myArray = ["Rock","Paper","Scissors","Lizard","Spock"];
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

  function reset(){
    document.getElementById('computer').innerHTML="";
    document.getElementById('output').innerHTML=""; 
    document.getElementById('score').innerHTML="";
  }

 function rock(){
  let computer = document.getElementById("computer").innerHTML = myArray[Math.floor(Math.random()*myArray.length)];
  let rock = document.getElementById('output');
  rock.innerHTML = document.getElementById('rock').innerHTML;
  let score = document.getElementById("score");
  if (computer === myArray[0]) { score.innerHTML= "draw"; }
  else if (computer === myArray[1]) { score.innerHTML= "you lose"; }
  else if (computer === myArray[2]) { score.innerHTML= "you win"; }
  else if (computer === myArray[3]) { score.innerHTML= "you win"; }
  else  { score.innerHTML= "you lose"; }
 }
 function paper(){
  let computer = document.getElementById("computer").innerHTML = myArray[Math.floor(Math.random()*myArray.length)];
  let paper = document.getElementById('output');
  paper.innerHTML = document.getElementById('paper').innerHTML;
  let score = document.getElementById("score");

  if (computer === myArray[0]) { score.innerHTML= "you win"; }
  else if (computer === myArray[1]) { score.innerHTML= "draw"; }
  else if (computer === myArray[2]) { score.innerHTML= "you lose"; }
  else if (computer === myArray[3]) { score.innerHTML= "you lose"; }
  else  { score.innerHTML= "you win"; }
 }
 function scissors(){
  let computer = document.getElementById("computer").innerHTML = myArray[Math.floor(Math.random()*myArray.length)];
  let scissors = document.getElementById('output');
  scissors.innerHTML = document.getElementById('scissors').innerHTML;
  let score = document.getElementById("score");

  if (computer === myArray[0]) { score.innerHTML= "you lose"; }
  else if (computer === myArray[1]) { score.innerHTML= "you win"; }
  else if (computer === myArray[2]) { score.innerHTML= "draw"; }
  else if (computer === myArray[3]) { score.innerHTML= "you win"; }
  else  { score.innerHTML= "you lose"; }
 }
 function lizard(){
  let computer = document.getElementById("computer").innerHTML = myArray[Math.floor(Math.random()*myArray.length)];
  let lizard = document.getElementById('output');
  lizard.innerHTML = document.getElementById('lizard').innerHTML;
  let score = document.getElementById("score");

  if (computer === myArray[0]) { score.innerHTML= "you lose"; }
  else if (computer === myArray[1]) { score.innerHTML= "you win"; }
  else if (computer === myArray[2]) { score.innerHTML= "you lose"; }
  else if (computer === myArray[3]) { score.innerHTML= "draw"; }
  else  { score.innerHTML= "you win"; }
 }
 function spock(){
  let computer = document.getElementById("computer").innerHTML = myArray[Math.floor(Math.random()*myArray.length)];
  let spock = document.getElementById('output');
  spock.innerHTML = document.getElementById('spock').innerHTML;
  let score = document.getElementById("score");

  if (computer === myArray[0]) { score.innerHTML= "you win"; }
  else if (computer === myArray[1]) { score.innerHTML= "you lose"; }
  else if (computer === myArray[2]) { score.innerHTML= "you win"; }
  else if (computer === myArray[3]) { score.innerHTML= "you lose"; }
  else  { score.innerHTML= "draw"; }
  
  incrementScore();
 }
      
 function count(){
   let x=1;
   if(score.innerHTML==="you win"){win.innerHTML=++x;}
   else if (score.innerHTML==="you lose"){lose.innerHTML=++x;}
   else if(score.innerHTML==="draw") {draw.innerHTML=++x;}
   else {alert="error"}
 }
 function incrementScore(){
    
  if(score.innerHTML ==="you win"){++win.innerHTML}
  else if (score.innerHTML ==="you lose"){++lose.innerHTML}
  else if (score.innerHTML ==="draw"){++draw.innerHTML}
  else {alert="error"}

}
function check(){
  let userAnswer = parseInt(document.getElementById("score").value);
    let calculateAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculateAnswer[0];

    if (isCorrect){
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awww.... you answered ${userAnswer}. The correct answer was ${calculateAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculateAnswer[1]);
}
/**
* gets the current tally of incorrect answers from the DOM and incriments it by 1
*/
function incrementWrongAnswer(){

  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;
  
}