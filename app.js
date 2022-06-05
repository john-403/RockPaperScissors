function computerPlay() {
    myArr = ["Rock", "Paper", "Scissors"];
    return myArr[Math.floor(Math.random() * myArr.length)]
}
userPoints = 0;
computerPoints = 0;
function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
        return "It's a tie. Rock vs Rock."
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        userPoints++;
        return "You win. Paper beats Rock."
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        computerPoints++;
        return "You lose. Rock beats Scissors."
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerPoints++;
        return "You lose. Paper beats Rock."
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        return "It's a tie. Paper vs Paper."
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        userPoints++;
        return "You win. Scissors beat Paper."
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        userPoints++;
        return "You win. Rock beats Scissors."
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        computerPoints++;
        return "You lose. Scissors beats Paper."
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        return "It's a tie. Scissors vs Scissors."
    }
    else return "Not a feasible choice. Please choose one of the indicated choices."
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(window.prompt("Choose 1: Rock, Paper, or Scissors"), computerPlay()))
    }
    if (userPoints > computerPoints) {
        console.log(`You won ${userPoints} out of 5 rounds!`)
    }
    else {
        console.log(`You lost with a score of ${userPoints} compared to ${computerPoints} for the computer out of 5 rounds.`)
    }
}

game();