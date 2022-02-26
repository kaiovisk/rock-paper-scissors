const opitions = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let computerOptions = parseInt(Math.random()*opitions.length);
    return opitions[computerOptions];
}

function caseInsensitive(txt){
    txt = txt.toLowerCase();
    let firstLetter = txt.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    txt = txt.replace(txt.charAt(0), firstLetter);
    return txt;
}

let gameRound = (playerSelection, computerSelection) => {
    if (playerSelection == opitions[0] && computerSelection == opitions[0]) {
        return "Draw!"
    } else if (playerSelection == opitions[0] && computerSelection == opitions[1]) {
        computerScore++;
        return "You lose! Paper beats Rock."
    } else if (playerSelection == opitions[0] && computerSelection == opitions[2]) {
        playerScore++;
        return "You win! Rock beats Scissors."
    } else if (playerSelection == opitions[1] && computerSelection == opitions[0]) {
        playerScore++;
        return "You win! Paper beats Rock."
    } else if (playerSelection == opitions[1] && computerSelection == opitions[1]) {
        return "Draw!"
    } else if (playerSelection == opitions[1] && computerSelection == opitions[2]) {
        computerScore++;
        return "You lose! Scissors beats Paper."
    } else if (playerSelection == opitions[2] && computerSelection == opitions[0]) {
        computerScore++;
        return "You lose! Rock beats Scissors."
    } else if (playerSelection == opitions[2] && computerSelection == opitions[1]) {
        playerScore++;
        return "You win! Scissors beats Paper."
    } else if (playerSelection == opitions[2] && computerSelection == opitions[2]) {
        return "Draw!"
    }
}

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

function game() {
    for (i = 0; i < 5; i++) {
        if (!playerSelection === String || playerSelection != opitions) {
            playerSelection = caseInsensitive(prompt('Rock, paper or scissors?'));
            computerSelection = computerPlay();
            console.log(`${playerSelection} vs ${computerSelection}`);
            console.log(gameRound(playerSelection, computerSelection));
            gameRound(playerSelection, computerSelection);
        }
    }
    if(playerScore > computerScore) {
        alert(`Player victory with ${playerScore} points against ${computerScore} points.`);
    } else if (computerScore > playerScore) {
        alert(`Computer victory with ${computerScore} points against ${playerScore} points.`);
    } else if (playerScore == computerScore) {
        game();
    }
}

game();




