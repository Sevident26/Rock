const computerChoice = () => {
    const randNum = Math.floor(Math.random() * 3 + 1);
    const arrayPC = ["rock", "paper", "scissors"];
    const choicePC = arrayPC[randNum];
    return choicePC;
};

computerChoice();


const playerChoice = prompt("Let's play!", "Choose Rock, Paper or Scissors!");

if(playerChoice.toLowerCase === computerChoice){
console.log("It's a tie!");
} else if(playerChoice.toLowerCase === "rock" && computerChoice === "paper"){
    console.log("I win and you lose!");
} else if(playerChoice.toLowerCase === "rock" && computerChoice === "scissors"){
    console.log("You win!");
};