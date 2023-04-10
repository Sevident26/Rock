const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

getComputerChoice();

function getPlayerChoice() {
        let input = prompt("Let's Play", "Please type Rock, Paper Scissors");
        input = input.toLowerCase();
          return input;
         }

getPlayerChoice();

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return "It's a tie!"
    } else if (computerChoice === "rock" && playerChoice === "paper" ||
              computerChoice === "scissors" && playerChoice === "rock" ||
              computerChoice === "paper" && playerChoice === "scissors"){
        return "You win!"
              } 
    else {
        return "Computer Wins!";
}
}

function game(){
    
   let computerScore = 0;
   let playerScore = 0;
    for (let i = 0; i < 5; i ++){
        const computerChoice = getComputerChoice();
        const playerChoice = getPlayerChoice();
    console.log(playRound(computerChoice, playerChoice));
        if (playRound(computerChoice, playerChoice) === "You Win!"){
            playerScore++;
        }else if(playRound(computerChoice, playerChoice)==="Computer Wins!"){
            computerScore++;
            }
            console.log("Game Over!")
    }
    if (computerScore > playerScore){
        console.log("Computer Wins!");
    } else if (computerScore < playerScore) {
        console.log("You win!");
    }else {
        console.log("It's a tie!");
    } 
}