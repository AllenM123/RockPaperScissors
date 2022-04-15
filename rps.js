const shoot = ['Rock', 'Paper', 'Scissor']

// computer picks rock paper or scissor
function computerPlay() {
    const randomShot = Math.floor(Math.random()*shoot.length);
    const choice = shoot[randomShot];
    return choice;
};

computerPlay();
function playRound(playerSelection, computerSelection){
    
}

let computerSelection = computerPlay();
console.log("Computer Picks: " + computerSelection);

// player inputs rock paper or scissor with correct font
let playerPromt = prompt("Please pick Rock, Paper, or Scissor");

function correctFont(playerPromt) {
    playerPromt = playerPromt.charAt(0).toUpperCase() + playerPromt.slice(1).toLowerCase();
    return playerPromt;
}
correctFont(playerPromt);
let playerSelection = correctFont(playerPromt);
console.log("Player Picks: " + playerSelection);

// gameplay rock
if (playerSelection === 'Rock' && computerSelection === 'Scissor') {
    console.log("You Win! Rock beats Scissor");
} else if (playerSelection === 'Rock' && computerSelection === 'Paper'){
    console.log("You lose! Paper beats Rock");
} else if (playerSelection ==='Rock' && computerSelection === 'Rock'){
    console.log("Its a Tie!");
}
// gameplay paper
if (playerSelection === 'Paper' && computerSelection === 'Scissor') {
    console.log("You Lose! Scissor beats Paper");
} else if (playerSelection === 'Paper' && computerSelection === 'Paper'){
    console.log("Its a Tie!");
} else if (playerSelection ==='Paper' && computerSelection === 'Rock'){
    console.log("You Win! Paper beats Rock");
}
// gameplay scissor
if (playerSelection === 'Scissor' && computerSelection === 'Scissor') {
    console.log("Its a Tie!");
} else if (playerSelection === 'Scissor' && computerSelection === 'Paper'){
    console.log("You Win! Scissor beats Paper");
} else if (playerSelection ==='Scissor' && computerSelection === 'Rock'){
    console.log("You lose! Rock beats Scissor");
}
