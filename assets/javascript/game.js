var gameChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var RandomLetter = null;


var winCount = document.getElementById("win-count");
var lossCount = document.getElementById("loss-count");
var guessCount = document.getElementById("guesses-left");
var userChoice = document.getElementById("user-choice");
var computerChoice = document.getElementById("computer-choice");

var computerLetter = function (){
    RandomLetter = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    console.log(RandomLetter);
}
var updateGuessedLetters = function(){
    userChoice.innerHTML = guessedLetters.join(", ");
}
computerLetter()

var reset = function(){
    guessesLeft = 9;
    guessedLetters = [];
    computerLetter();
    updateGuessedLetters();
}
document.onkeydown = function (event) {
    var userGuess = event.key.toLowerCase();
    guessedLetters.push(userGuess)
    updateGuessedLetters();
   


    if (gameChoices.includes(userGuess)) {
            if (userGuess === RandomLetter) {
                wins++;
                guessesLeft = 9;
                alert("You Won!");
                reset();
            } else {
                guessesLeft--
            } if (guessesLeft === 0){
                losses++;
                guessesLeft = 9;
                alert("You lost, try again");
                reset();
            }

            
            guessCount.textContent = guessesLeft;
            lossCount.textContent = losses;
            winCount.textContent =  wins;

    }
}