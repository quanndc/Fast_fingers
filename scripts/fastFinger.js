let keyBoard = document.body;
let keys = document.getElementsByClassName("key");
let key = ["q","w","e","r","t","y","u","i","o","p","Backspace","a","s","d","f","g","h","j","k","l","Enter","Shift","z","x","c","v","b","n","m"," "]
let answer = document.getElementById("output");
let randomWord = document.getElementById("random-word");

let startButton = document.getElementById("start");
let time = document.getElementById("time");
let statusAnswer = document.getElementById("status");
let timeToPlay = 30;
let playing = false;
let playerScore = document.getElementById("result");

//generate 100 random words array
let word = ["hello","world","this","is","a","test","of","the","emergency","broadcast","system","this","is","only","a","test","if","this","had","been","a","real","emergency","you","would","have","been","instructed","to","take","shelter","in","place","or","to","take","cover","under","a","desk","or","table","please","do","not","be","alarmed","this","is","only","a","test","thank","you"];

let result = document.createElement("p");

let score = 0;


function keyPressed(event) {
  if (event.key != "") {
    for (let i = 0; i < key.length; i++) {
      if (event.key === key[i]) {
        keys[i].style.backgroundColor = "#454545";
        break;
      }
    }
  }
}

function keyUnPressed(event) {
  if (event.key != "") {
    for (let i = 0; i < key.length; i++) {
      if (event.key === key[i]) {
        keys[i].style.backgroundColor = "black";
        break;
      }
    }
  }
}


function start(){
    statusAnswer.lastElementChild.innerHTML = "";
    let index = Math.floor(Math.random() * word.length);
    let t = timeToPlay;
    result.innerHTML = word[index];
    randomWord.appendChild(result);
    let timer = setInterval(function(){
        if(t >= 0){
            time.innerHTML = t;
            t--;
        }
        else{
            randomWord.lastElementChild.remove();
            statusAnswer.lastElementChild.innerHTML = "Your Score is:" + " " + score;
            playerScore.innerHTML = "0";
            clearInterval(timer);
        }
    },500)
}




function enter(event){
    let countWord = document.getElementById("result");
    if(event.key === "Enter" && output.value === randomWord.lastElementChild.innerHTML){
        let index = Math.floor(Math.random() * word.length);
        result.innerHTML = word[index];
        randomWord.lastElementChild.innerHTML = result.innerHTML;
        output.value = "";
        statusAnswer.lastElementChild.innerHTML = "Correct";
        score++;
        countWord.innerHTML = score;
    }
    else if(event.key === "Enter" && output.value != tmp){
        output.value = "";
        statusAnswer.lastElementChild.innerHTML = "Wrong";
    }
    else if(event.key === "Enter" && output.value === " "){
        return;
    }
}


keyBoard.addEventListener("keydown", keyPressed);
keyBoard.addEventListener("keyup", keyUnPressed);
keyBoard.addEventListener("keydown", enter);
startButton.addEventListener("click",start)
