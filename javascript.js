
const btns = document.querySelectorAll("button");

const currentState = document.querySelector(".currentState");
const currentScores = document.querySelector(".currentScores");


let humanChoice = "";
let computerChoice;
let roundPlayed = 0
let scores = [0,0] // score[0] is the player. score[1] is the computer

btns.forEach((button) =>{
    button.addEventListener("click", ()=>{
        humanChoice = button.id;
        playRound(scores);
        if(scores[0] == 5 || scores[1] == 5){  
            for (const button of btns) {
                button.disabled = true;
            }
            declareWinner(scores);
        }
    });
});


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

function declareWinner(scores){
    if(scores[0] > scores[1]){
        currentState.textContent = "You have won the game! Congratulations! Refresh the page to play again!";
    } else if (scores[1] > scores[0]) {
        currentState.textContent = "You have lost the game! Better luck next time! Refresh the page to play again!"
    } else {
        currentState.textContent = "It's a tie at the end! Refresh the page to play again!";
    }
}

function playRound(scores){    
        getComputerChoice(3);
    
        if (humanChoice == "rock" && computerChoice == "paper"){
            scores[1]++;
            currentState.textContent = "You have lost this round. Computer chose Paper and Paper beats Rock.";
            currentScores.textContent = "Player: " + scores[0] + ". Computer: " + scores[1];

        }
        else if (humanChoice == "rock" && computerChoice == "rock"){
            currentState.textContent = "You have both chosen Rock. It's a tie.";
            currentScores.textContent = "Player: " + scores[0] + ". Computer: " + scores[1];

        }
        else if (humanChoice == "rock" && computerChoice == "scissors"){
            scores[0]++;
            currentState.textContent = "You have won this round. Computer chose Scissors and Rock beats Scissors.";
            currentScores.textContent = "Player: " + scores[0] + ". Computer: " + scores[1];


        }
    
        else if (humanChoice == "paper" && computerChoice == "scissors"){
            scores[1]++;
            currentState.textContent = "You have lost this round. Computer chose Scissors and Scissors beats Paper.";
            currentScores.textContent = "Player: " + scores[0] + ". Computer: " + scores[1];
        }
        else if (humanChoice == "paper" && computerChoice == "paper"){
            currentState.textContent = "You have both chosen Paper. It's a tie.";
            currentScores.textContent = "Player: " + scores[0] + ". Computer: " + scores[1];
        }
        else if (humanChoice == "paper" && computerChoice == "rock"){
            scores[0]++;
            currentState.textContent = "You have won this round. Computer chose Rock and Paper beats Rock.";
            currentScores.textContent = "Player: " + scores[0] + ". Computer: " + scores[1];
        }
    
        else if (humanChoice == "scissors" && computerChoice == "rock"){
            scores[1]++;
            currentState.textContent = "You have lost this round. Computer chose Rock and Rock beats Scissors.";
            currentScores.textContent = "Player: " + scores[0] + ". Computer: " + scores[1];
        }
        else if (humanChoice == "scissors" && computerChoice == "scissors"){
            currentState.textContent = "You have both chosen Scissors. It's a tie.";
            currentScores.textContent = "Player: " + scores[0] + ". Computer: " + scores[1];
        }
        else if (humanChoice == "scissors" && computerChoice == "paper"){
            scores[0]++;
            currentState.textContent = "You have won this round. Computer chose Scissors and Scissors beats Paper";
            currentScores.textContent = "Player: " + scores[0] + ". Computer: " + scores[1];

        }
        else {
            currentState.textContent = "Something unexpected happened. Refresh the page!";
        }
        return scores;
}






