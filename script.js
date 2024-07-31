console.log("Hello world");

const choices = ['rock', 'paper', 'scissors'];
const randomIndex = Math.floor(Math.random() * 3)

function getComputerChoice() {
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("What's your selection? ").toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    }
     getHumanChoice();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (
            humanChoice === 'rock' && computerChoice === 'scissors' ||
            humanChoice === 'paper' && computerChoice === 'rock' ||
            humanChoice === 'scissors' && computerChoice === 'paper'
        ) {
            console.log(`Human Wins, with ${humanChoice} beating ${computerChoice}`);
            humanScore++;
            console.log(`Computer score: ${humanScore}`)
        } 
        else if (
            computerChoice === 'rock' && humanChoice === 'scissors' ||
            computerChoice === 'paper' && humanChoice === 'rock' ||
            computerChoice === 'scissors' && humanChoice === 'paper'
        ) {
            console.log(`Computer Wins, with ${computerChoice} beating ${humanChoice}`);
            computerScore++;
            console.log(`Computer score: ${computerScore}`)
        }
        else {
            console.log(`Tie!`);
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(humanSelection, computerSelection);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playGame();
