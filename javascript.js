// Notes: getComputerChoise(), getHumanChoice() using the prompt method
// function playRound(humanChoice, computerChoice) {
//     // your code here!
//   }
  
//   const humanSelection = getHumanChoice();
//   const computerSelection = getComputerChoice();
  
//   playRound(humanSelection, computerSelection);

//Make playGame(). playRound() will be inside this function. 


//START playGame method
//humanResult is 0. computerResult is 0. roundPlayed is 0
//START OF playRound:
//STORE value of the variable of prompt inside humanChoice
//MAKE humanChoice case-insensitive
//IF answer is NOT acceptable
//  console.log text "Not acceptable answer. Try again!"
//  BACK to step 2
//STORE value of the random value inside computerChoice

//GENERATE random numbers up to 3.
//IF number is 1 
//  computerChoice is Rock
//IF number is 2
//  computerChoice is Paper
//IF number is 3
//  computerChoice is Scissors

//Rules: Rock beats scissors. Paper beats rock. Scissors beats Paper. Else tie

//IF humanChoise is Rock AND computerChoise is Paper
//  console.log "You have lost this round. Computer chose Paper and Paper beats Rock"
//  computerResult is incremented by 1. roundPlayed is incremented by 1
//IF humanChoise is Rock AND computerChoise is Rock
//  console.log "You have both chosen Rock. It's a tie". roundPlayed is incremented by 1
//IF humanChoise is Rock AND computerChoise is Scossors
//  console.log "You have won this round. Computer chose Scissors and Rock beats Rock". roundPlayed is incremented by 1

//IF humanChoise is Paper AND computerChoise is Scissors
//  console.log "You have lost this round. Computer chose Scissors and Scissors beats Paper"
//  computerResult is incremented by 1. roundPlayed is incremented by 1
//IF humanChoise is Paper AND computerChoise is Paper
//  console.log "You have both chosen Paper. It's a tie". roundPlayed is incremented by 1
//IF humanChoise is Paper AND computerChoise is Rock
//  console.log "You have won this round. Computer chose Rock and Paper beats Rock". roundPlayed is incremented by 1

//IF humanChoise is Scissors AND computerChoise is Rock
//  console.log "You have lost this round. Computer chose Rock and Rock beats Scissors"
//  computerResult is incremented by 1. roundPlayed is incremented by 1
//IF humanChoise is Scissors AND computerChoise is Scissors
//  console.log "You have both chosen Scissors. It's a tie". roundPlayed is incremented by 1
//IF humanChoise is Scissors AND computerChoise is Paper
//  console.log "You have won this round. Computer chose Paper and Scissors beats Paper". roundPlayed is incremented by 1

//IF roundPlayed is equal to 5
//  RUN declareWinner()

//declareWinner():
//IF humanScore > computerScore
//  console.log "You have won"
//ELSE IF computerScore > humanScore
//  console.log "You have lost"
//ELSE console.log "It's a tie"

//humanResult is 0. computerResult is 0. roundPlayed is 0
//END OF playRound

//IF user runs playGame
//  BACK to step 1
//ELSE 
//  END

function playRound(){
    let humanScore = 0;
    let computerScore = 0;
    let roundPlayed = 0;
    let humanChoise;
    let computerChoice;
    function getHumanChoice(){
        do {
            humanChoise = prompt("Rock, Paper or Scissors?");
            humanChoise = humanChoise.toLocaleLowerCase();
        } while(humanChoise != "rock" && humanChoise != "paper" && humanChoise != "scissors");
        return humanChoise;
    }

    function getComputerChoice(){
        computerChoise = Math.floor(Math.random() * 3);
        if(computerChoise == 0){
            computerChoise = "rock";
        } else if (computerChoise == 1) {
            computerChoise = "paper";
        } else {
            computerChoise = "scissors";
        }
        return computerChoise;
    }

    function declareWinner(){
        if(humanScore > computerScore){
            console.log("You win! Congratulations!");
        } else if (computerScore > humanScore) {
            console.log("You lose! Better luck next time!");
        } else {
            console.log("It's a tie!");
        }
    }
     while(roundPlayed < 5){
        getHumanChoice();
        console.log("You chose " + humanChoise);
    
        getComputerChoice(3);
        console.log("Computer chose " + computerChoise);
    
        if (humanChoise == "rock" && computerChoise == "paper"){
            console.log("You have lost this round. Computer chose Paper and Paper beats Rock");
            computerScore++;
            roundPlayed++;
        }
        if (humanChoise == "rock" && computerChoise == "rock"){
            console.log("You have both chosen Rock. It's a tie");
            roundPlayed++;
        }
        if (humanChoise == "rock" && computerChoise == "scissors"){
            console.log("You have won this round. Computer chose Scissors and Rock beats Scissors");
            humanScore++;
            roundPlayed++;
        }
    
        if (humanChoise == "paper" && computerChoise == "scissors"){
            console.log("You have lost this round. Computer chose Scissors and Scissors beats Paper");
            computerScore++;
            roundPlayed++;
        }
        if (humanChoise == "paper" && computerChoise == "paper"){
            console.log("You have both chosen Paper. It's a tie");
            roundPlayed++;
        }
        if (humanChoise == "paper" && computerChoise == "rock"){
            console.log("You have won this round. Computer chose Rock and Paper beats Paper");
            humanScore++;
            roundPlayed++;
        }
    
        if (humanChoise == "scissors" && computerChoise == "rock"){
            console.log("You have lost this round. Computer chose Rock and Rock beats Scissors");
            computerScore++;
            roundPlayed++;
        }
        if (humanChoise == "scissors" && computerChoise == "scissors"){
            console.log("You have both chosen Scissors. It's a tie");
            roundPlayed++;
        }
        if (humanChoise == "scissors" && computerChoise == "paper"){
            console.log("You have won this round. Computer chose Scissors and Scissors beats Paper");
            humanScore++;
            roundPlayed++;
        }    
    }
    declareWinner();
}

playRound();




