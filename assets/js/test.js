  var myArray = ["Rock","Paper","Scissors","Lizard","Spock"];
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  var modal = document.getElementById("myModal");
function tester111(){
  var timeleft = 5;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("computer").innerHTML ="Go!";
  } else {
    document.getElementById("computer").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
}

function send1(){
  var line = "";
  var name = document.getElementById("name").value;
  let streak = document.getElementById("streak").innerHTML;
  let total = document.getElementById("total");
  total.value = streak.innerHTML;
  rows += "<tr><td>" + name + "</td><td>" + branch + 
  "</td><td>" + address + "</td><td> " + contact + "</td></tr> ";
  $(rows).appendTo("#list tbody");
  return false;
}

function counter(){
  let score = document.getElementById('score').innerHTML;
  let streak = document.getElementById('streak').innerHTML;
  if (score.innerHTML==="you win"){++streak.innerHTML}
  }
  function gameOver(){
  let loseCheck =document.getElementById("lose").innerHTML;
  if (loseCheck >1){
    modal.style.display = "block";
    sendit();
    reset();
    document.getElementById('level').innerHTML="1";
    document.getElementById('streak').innerHTML="0";
    
    
  }
  }
  function gameOverBox(event){
    if(event.gameOver===true){modal.style.display = "block";}
  }

  function levelUp(){
    let winCheck =document.getElementById("win").innerHTML;
    if(winCheck==="3"){++level.innerHTML
    alert("Level Up!")
    document.getElementById('win').innerHTML="0";
    document.getElementById('lose').innerHTML="0";
    document.getElementById('draw').innerHTML="0";
    } 
  }

  function reset(){
    document.getElementById('computer').innerHTML="";
    document.getElementById('output').innerHTML=""; 
    document.getElementById('score').innerHTML="";
    document.getElementById('win').innerHTML="0";
    document.getElementById('lose').innerHTML="0";
    document.getElementById('draw').innerHTML="0";

  }
function newcomputer(){
  var computer00 = myArray[Math.floor(Math.random()*myArray.length)];
  var timeleft = 3;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("computer").innerHTML =computer00;
  } else {
    document.getElementById("computer").innerHTML = timeleft ;
  }
  timeleft -= 1;
}, 1000);

}

 function rock(){
 let computer001 = document.getElementById('computer');
  let rock = document.getElementById('output');
  rock.innerHTML = document.getElementById('rock').innerHTML;
  let score = document.getElementById("score");
  newcomputer();
  if (computer001 === myArray[0]) { score.innerHTML= "draw"; }
  else if (computer001 === myArray[1]) { score.innerHTML= "you lose"; }
  else if (computer001 === myArray[2]) { score.innerHTML= "you win"; }
  else if (computer001 === myArray[3]) { score.innerHTML= "you win"; }
  else  { score.innerHTML= "you lose"; }
  incrementScore();
  gameOver();
  levelUp();
  counter();
 }
 function paper(){
  let computer = document.getElementById("computer").innerHTML = newcomputer();
  let paper = document.getElementById('output');
  paper.innerHTML = document.getElementById('paper').innerHTML;
  let score = document.getElementById("score");

  if (computer === myArray[0]) { score.innerHTML= "you win"; }
  else if (computer === myArray[1]) { score.innerHTML= "draw"; }
  else if (computer === myArray[2]) { score.innerHTML= "you lose"; }
  else if (computer === myArray[3]) { score.innerHTML= "you lose"; }
  else  { score.innerHTML= "you win"; }
  incrementScore();
  gameOver();
  levelUp();
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
  incrementScore();
  gameOver();
  levelUp();
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
  incrementScore();
  gameOver();
  levelUp();
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
  gameOver();
  levelUp();
 }
 function incrementScore(){
  if(score.innerHTML ==="you win"){++win.innerHTML, ++streak.innerHTML}
  else if (score.innerHTML ==="you lose"){++lose.innerHTML}
  else if (score.innerHTML ==="draw"){++draw.innerHTML}
  else {alert="error"}

}


function addData(el) {
  var table = document.getElementById('list');
  var tr = table.insertRow();
  el.form.querySelectorAll('input').forEach(function(el) {
    var cell = tr.appendChild(document.createElement('td'));
    cell.textContent = el.value;
  });
}
function sendit(){
  let yourScore = document.getElementById('totalamount');
  yourScore.value=streak.innerHTML;
}

function getFormDetails(event){
  event.preventDefault();
  console.log("this");
   let name=document.getElementById("name");
   console.log(name.value);
   let email=document.getElementById("email");
    console.log(email.value);
  let nameResult = document.getElementById('name-result').innerHTML=name.value;
   console.log(nameResult);
    let emailResult = document.getElementById('email-result').innerHTML=email.value;
   console.log(emailResult);
}
let newsletterForm=document.getElementById("newsletter-signup");
newsletterForm.addEventListener("submit", getFormDetails);

function Send ()
 {
     var x = document.getElementById("Box");
     var Select_value = x.options[x.selectedIndex].text;
      
      var newOpt = document.createElement('option');
      newOpt.innerHTML = Select_value;
      document.getElementById('Box2').appendChild(newOpt);
 }
function close(){
  let modal = document.getElementById('myModal');
  if(document.getElementById('bouton_Envoyer').clicked == true)
{
   
  modal.style.display = "none";
}
}