const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

const currentState = document.querySelector(".currentState");


let humanChoice = "";
let computerChoice;
let roundPlayed = 0
let scores = [0,0] // score[0] is the player. score[1] is the computer

btnRock.addEventListener("click", ()=>{
    humanChoice = btnRock.id;
    playRound(scores);
});
btnPaper.addEventListener("click", ()=>{
    humanChoice = btnPaper.id;
    playRound(scores);

});
btnScissors.addEventListener("click", ()=>{
    humanChoice = btnScissors.id;
    playRound(scores);

});


function test(){
    alert("holi");
}

function getComputerChoice(){
    computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice == 0){
        computerChoice = "rock";
    } else if (computerChoice == 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function declareWinner(finalScores){
    if(finalScores[0] > finalScores[1]){
        console.log("You win! Congratulations!");
    } else if (finalScores[1] > finalScores[0]) {
        console.log("You lose! Better luck next time!");
    } else {
        console.log("It's a tie!");
    }
}

function playRound(scores){
        console.log("You chose " + humanChoice);
    
        getComputerChoice(3);
        console.log("Computer chose " + computerChoice);

    
        if (humanChoice == "rock" && computerChoice == "paper"){
            scores[1]++;
            currentState.textContent = "You have lost this round. Computer chose Paper and Paper beats Rock. Current score is: " + scores;

        }
        else if (humanChoice == "rock" && computerChoice == "rock"){
            currentState.textContent = "You have both chosen Rock. It's a tie. Current score is: " + scores;

        }
        else if (humanChoice == "rock" && computerChoice == "scissors"){
            scores[0]++;
            currentState.textContent = "You have won this round. Computer chose Scissors and Rock beats Scissors. Current score is: " + scores;


        }
    
        else if (humanChoice == "paper" && computerChoice == "scissors"){
            scores[1]++;
            currentState.textContent = "You have lost this round. Computer chose Scissors and Scissors beats Paper. Current score is: " + scores;
        }
        else if (humanChoice == "paper" && computerChoice == "paper"){
            currentState.textContent = "You have both chosen Paper. It's a tie. Current score is: " + scores;
        }
        else if (humanChoice == "paper" && computerChoice == "rock"){
            scores[0]++;
            currentState.textContent = "You have won this round. Computer chose Rock and Paper beats Rock. Current score is: " + scores;
        }
    
        else if (humanChoice == "scissors" && computerChoice == "rock"){
            scores[1]++;
            currentState.textContent = "You have lost this round. Computer chose Rock and Rock beats Scissors. Current score is: " + scores;
        }
        else if (humanChoice == "scissors" && computerChoice == "scissors"){
            currentState.textContent = "You have both chosen Scissors. It's a tie. Current score is: " + scores;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper"){
            scores[0]++;
            currentState.textContent = "You have won this round. Computer chose Scissors and Scissors beats Paper";
        }
        else {
            currentState.textContent = "Something unexpected happened. Refresh the page!";
        }
        return scores;
}

//console.log("You are going to play 5 rounds of Rock Paper Scissors.");
// if (scores[0] < 5 && scores[1] < 5){
//     console.log("Round " + (roundPlayed+1));
//     playRound(scores);
//     roundPlayed++;
//     console.log("Your score is now: " + scores[0] + " . And the computer's score is now: " + scores[1]);
// }
//declareWinner(scores);






