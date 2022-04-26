const shoot = ['rock', 'paper', 'scissor'];
const winners = [];
const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const computerScoreDisplay = document.getElementById('computer-score');
const playerScoreDisplay = document.getElementById('player-score');
const endGameDisplay = document.getElementById('end-game');
const buttons = document.querySelectorAll('button');
let playerSelection;
let computerSelection;


// player inputs rock paper or scissor
    buttons.forEach(buttons => buttons.addEventListener('click', (e) => {
        playerSelection = e.target.id
        playerChoiceDisplay.innerHTML = playerSelection;
        buttons.classList.add('playing'); //adds an animation
        computerChoice();
        playRound();
        logWins();
    }))

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

buttons.forEach(buttons => buttons.addEventListener('transitionend', removeTransition));

function playRound(){
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
};

function checkWinner(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        resultDisplay.innerHTML = "You lose! Paper beats Rock"
        return "Lose"
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        resultDisplay.innerHTML = "You win! Rock beats Scissor"
        return "Win"
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        resultDisplay.innerHTML = "You lose! Scissor beats Paper"
        return "Lose"
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        resultDisplay.innerHTML = "You win! Paper beats Rock"
        return "Win"
    }
    else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        resultDisplay.innerHTML = "You win! Scissor beats Paper"
        return "Win"
    }
    else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        resultDisplay.innerHTML = "You lose! Rock beats Scissor"
        return "Lose"
    }
    else if (playerSelection === computerSelection) {
        resultDisplay.innerHTML = "Tie"
        return "Tie"
    }
}

// computer picks rock paper or scissor
function computerChoice() {
    const randomShot = Math.floor(Math.random()*shoot.length);
    computerSelection = shoot[randomShot];
    computerChoiceDisplay.innerHTML = computerSelection;
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Win").length;
    let computerWins = winners.filter((item) => item == "Lose").length;
    // let ties = winners.filter((item) => item == "Tie").length;
    computerScoreDisplay.innerHTML = computerWins;
    playerScoreDisplay.innerHTML = playerWins;
    // console.log("Ties: ", ties);
    if (playerWins === 5){
        endGameDisplay.innerHTML = "You WIN!";

        let image = document.createElement("img");
        image.setAttribute("class", "mouseHappySticker")
        document.body.appendChild(image);
        
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissor').disabled = true;

        let playAgain = document.createElement("button");
        playAgain.setAttribute("class", "playAgain")
        playAgain.innerHTML = "Play Again?";
        document.body.appendChild(playAgain);
        playAgain.addEventListener('click', (e) => {
        location.reload();
        })
    }
    else if (computerWins === 5){
        endGameDisplay.innerHTML = "You LOSE!";

        let image = document.createElement("img");
        image.setAttribute("class", "mouseSadSticker");
        document.body.appendChild(image);

        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissor').disabled = true;

        let playAgain = document.createElement("button");
        playAgain.setAttribute("class", "playAgain")
        playAgain.innerHTML = "Play Again?";
        document.body.appendChild(playAgain);
        playAgain.addEventListener('click', (e) => {
        location.reload();
        })
    }
    // else {
    //     console.log("Its a tie!");
    // }
}
