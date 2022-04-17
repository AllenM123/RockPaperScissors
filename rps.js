const shoot = ['rock', 'paper', 'scissor']
const winners = [];

function game(){
for (let i = 0; i < 5; i++) {
    playRound();
    }
logWins();
}

function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    console.log("You Play: " + playerSelection);
    console.log("Comptuer Play: " + computerSelection);
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
};

function checkWinner(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log("You lose! Paper beats Rock")
        return "Lose"
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        console.log("You win! Rock beats Scissor")
        return "Win"
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        console.log("You lose! Scissor beats Paper")
        return "Lose"
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("You win! Paper beats Rock")
        return "Win"
    }
    else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        console.log("You win! Scissor beats Paper")
        return "Win"
    }
    else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        console.log("You lose! Rock beats Scissor")
        return "Lose"
    }
    else if (playerSelection === computerSelection) {
        console.log("Tie")
        return "Tie"
    }
}

// player inputs rock paper or scissor with correct font
function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissor");
    input = input.toLowerCase();
        return input;
    }

// computer picks rock paper or scissor
function computerChoice() {
    const randomShot = Math.floor(Math.random()*shoot.length);
    const choice = shoot[randomShot];
    return choice;
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Win").length;
    let computerWins = winners.filter((item) => item == "Lose").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins: ", playerWins);
    console.log("Computer Wins: ", computerWins);
    console.log("Ties: ", ties);
}

game();
