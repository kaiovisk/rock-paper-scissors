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

let playerSelection = caseInsensitive(prompt('Rock, paper or scissors?'));
let computerSelection = computerPlay();

let playerScore = 0;
let computerScore = 0;

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

function game() {
    for (i = 0; i < 5; i++) {
        playerSelection = caseInsensitive(prompt('Rock, paper or scissors?'));
        computerSelection = computerPlay();
        gameRound(playerSelection, computerSelection);
        console.log(`${playerSelection} vs ${computerSelection}`);
        console.log(gameRound(playerSelection, computerSelection));
    }
    if(playerScore > computerScore) {
        alert('Player victory!');
    } else if (computerScore > playerScore) {
        alert('Computer victory!');
    } else if (playerScore == computerScore) {
        game();
    }
}

game();




