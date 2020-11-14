let moves = ["rock", "paper", "scissors"];
let playerScore = 0;
let compScore = 0;
let numRounds = 0;
// gameplay log
// whenever a button is pressed, check if there's a win
// if there's no win aka no one hit score of 5 then add
// an element to a list and reverse the order of the list
// on screen


function computerPlay() {
    return moves[Math.floor(Math.random() * moves.length)];
}

function updateScore() {
    const score = document.querySelector('#score');
    console.log(score);
    score.innerHTML = `${playerScore} - ${compScore}`;
}

function playRound(e) {
    let playerSelection = e.target.id;
    let computerSelection = computerPlay();
    if (!playerSelection || !computerSelection) {
    return;
    }
    numRounds++;

    if (playerSelection == computerSelection) {
        result.innerHTML = "Draw!";
    } else if (playerSelection == moves[0] && computerSelection == moves[2] ||
        playerSelection == moves[2] && computerSelection == moves[1] ||
        playerSelection == moves[1] && computerSelection == moves[0]) {
    
    playerScore++;
    result.innerHTML = `You won Round #${numRounds}! ${playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1)}` +
        ` beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.substring(1)}.`;
    } else {

    compScore++;
    result.innerHTML = `Computer won Round #${numRounds}! ${computerSelection.charAt(0).toUpperCase() + computerSelection.substring(1)}` +
        ` beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1)}.`;
    }
    
    updateScore();
    checkWin();
}

function checkWin() {
    if (playerScore == 5 || compScore == 5) {
        (playerScore > compScore) ? result.innerHTML = "YOU WON!" : result.innerHTML = "COMPUTER WON!";
        buttons.forEach((button) => button.removeEventListener('click', playRound));
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', playRound));

const result = document.createElement('result');
const container = document.querySelector('#container');
container.appendChild(result);