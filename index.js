//const variables that reference html ids
const color = document.getElementById("RGB-color");
const option1 = document.getElementById("option-1");
const option2 = document.getElementById("option-2");
const option3 = document.getElementById("option-3");
const lives = document.getElementById("livesRemaining");
const results = document.getElementById("result");
const totalScore = document.getElementById("score");
const replay = document.getElementById("replay");
const replayBtn = document.getElementById("playAgain")
const startBtn = document.getElementById("start")

let livesRemain = 3; //3 lives
let score = 0; //score 3
lives.innerHTML = "Lives: " + livesRemain; //print lives: 3

  //generate random numbers for each colour (r,g,b)
  function generateRGB() {
    R = randomColor();
    G = randomColor();
    B = randomColor();
    rgb = "rgb(" + R  + ", " + G + ", " + B + ")"; //prints rgb(num,num,num)
  }

  
  function randomColor() { //generates random number from 1 to 255 for the rgb color and return
    return Math.floor(Math.random() * 255)+ 1;
  }
  //prints the rgb code on html page
  function printRGB() {
    color.innerHTML = rgb; //print rgb string in html
  }
  
  //generate random numbers (0, 1 ,2 ) so that colours are random
  function randomNum() {
    return Math.floor(Math.random() * 3); 
  }

  function start() { //start button function
    generateRGB(); //generate random colors function
    printRGB(); //generate a new rgb
    displayColor();
    startBtn.style.display = "none"; 
  }
  
  //function to display all three colours at random
  function displayColor() {
    let random = randomNum(); //the result of random number function gets stored in random
    console.log(random);
    switch (random) { //switch statement 
      case 0:
        option1.style.backgroundColor = rgb;
        option2.style.backgroundColor = 'rgb(' + [randomColor(),  randomColor(),  randomColor()] + ')';
        option3.style.backgroundColor = 'rgb(' + [randomColor(),  randomColor(),  randomColor()] + ')';
        break;
      case 1:
        option1.style.backgroundColor = 'rgb(' + [randomColor(),  randomColor(),  randomColor()] + ')';
        option2.style.backgroundColor = rgb;
        option3.style.backgroundColor = 'rgb(' + [randomColor(),  randomColor(),  randomColor()] + ')';
        break;
      case 2:
        option1.style.backgroundColor = 'rgb(' + [randomColor(),  randomColor(),  randomColor()] + ')';
        option2.style.backgroundColor = 'rgb(' + [randomColor(),  randomColor(),  randomColor()] + ')';
        option3.style.backgroundColor = rgb;
        break;
    }
  }
  
  /*assigned audio to variables*/

let correctAudio = new Audio('assets/Correct.wav');
let incorrectAudio = new Audio('assets/Incorrect.mp3');

  function checkAnswer(option) {
    if (option.style.backgroundColor == rgb) { //if one of the options is equal to the same value as rgb then it's correct
      if(livesRemain <= 0) {

      } else {
      score++; //increase score
      start(); //new round
      results.innerHTML = "Correct!" //output correct
      correctAudio.play(); //play correct audio
    }
    } else { //otherwise its wrong
      livesRemain--; //remove a life
      lives.innerHTML = "Lives: " + livesRemain; //output amount of lives in HTML
      if (livesRemain <= 0) { //if lives is less than or equal to 0
        lives.innerHTML = "Lives: " + 0; //do not update lives
        totalScore.innerHTML = "Total Score: " + score; //print the score for the user
        results.innerHTML = "Would you like to play again?"; //print would you like to play again
        replayBtn.style.display = "inline"; //display play again button
      } else { //if its more than 0
        results.innerHTML = "Wrong!" //output Wrong on HTML
        incorrectAudio.play(); //play incorrect audio 
      }
    }
  }


//if user clicks on one, two or 3 div then it will check the answer for that option
  option1.addEventListener("click", function() {
    checkAnswer(option1);
  });
  
  option2.addEventListener("click", function() {
    checkAnswer(option2);
  });
  
  option3.addEventListener("click", function() {
    checkAnswer(option3);
  });

  function restart() {
    window.location.reload(); /*reload window*/
}    

//after the user has had all lives taken, it will dispaly a replay button that restarts the game
function replayButton() {
  start()
  livesRemain = 3;
  lives.innerHTML = "Lives: " + livesRemain;
  replayBtn.style.display = "none";
  results.innerHTML = " "; 
  totalScore.innerHTML = "";
  score = 0;
}