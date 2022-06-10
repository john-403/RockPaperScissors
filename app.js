const buttons = document.querySelectorAll("button");
// const button_rock = document.querySelector("#rock");
let gameisOver = false;



function computerPlay() {
    myArr = ["Rock", "Paper", "Scissors"];
    return myArr[Math.floor(Math.random() * myArr.length)]
}
userPoints = 0;
computerPoints = 0;
function playRound(playerSelection, computerSelection) {
    // return "Test";
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


// buttons.forEach(button => document.addEventListener('click', playRound(button.innerText, computerPlay)));
// console.log(buttons.forEach(button => console.log(button)))


// button_scissors = document.querySelector('#scissors');

const div = document.createElement('div');
const ul = document.createElement('ul')
const newLI = document.createElement('li');



function game() {
    // console.log(button_rock.addEventListener('click', (e) => playRound(e.target.textContent, 'paper')));



    // button_rock.addEventListener("click", (e) => console.log('moso'));
    // button_rock.addEventListener("click", (e) => console.log(playRound("rock", "Scissors")));



    // buttons.forEach(button => button.addEventListener("click", console.log("Paper")))
    for (button of buttons) {
        // button.addEventListener("click", (e) => console.dir(e.target.innerText));
        // button.addEventListener("click", (e) => console.log(playRound(e.target.innerText, "rock")));


        // button.addEventListener("click", (e) => console.log(playRound(e.target.innerText, computerPlay())));
        // console.log(userPoints);
        // console.log(computerPoints);
        // button.addEventListener("click", (e) => {
        //     console.log(playRound(e.target.innerText, computerPlay()))
        // });

        // const newLI = document.createElement('li');

        // button.addEventListener("click", (e) => newLI.innerText = playRound(e.target.innerText, computerPlay()));

        button.addEventListener("click", (e) => {
            if (!gameisOver) {
                const newLI = document.createElement('li');
                newLI.innerText = playRound(e.target.innerText, computerPlay());
                ul.append(newLI);
                ul.append(`Current Score: User Points ${userPoints} - ${computerPoints} Computer Points`);
                console.log(userPoints);
                console.log(computerPoints);
                // div.append(ul);
                // console.log(div);
                if ((userPoints > computerPoints) && (userPoints === 5 || computerPoints === 5)) {
                    console.log(`You won with a score of ${userPoints} compared to ${computerPoints} point(s) for the computer out of 5 rounds.`);
                    const newLI2 = document.createElement('li');
                    newLI2.innerText = `You won with a score of ${userPoints} compared to ${computerPoints} point(s) for the computer out of 5 rounds.`;
                    ul.append(newLI2);
                    gameisOver = true;
                    console.log(gameisOver);

                }
                else if ((userPoints < computerPoints) && (userPoints === 5 || computerPoints === 5)) {
                    console.log(`You lost with a score of ${userPoints} compared to ${computerPoints} point(s) for the computer out of 5 rounds.`);
                    const newLI2 = document.createElement('li');
                    newLI2.innerText = `You lost with a score of ${userPoints} compared to ${computerPoints} point(s) for the computer out of 5 rounds.`;
                    ul.append(newLI2);
                    gameisOver = true;
                    console.log(gameisOver);

                }
            }
        }
        )
            ;
        // div.append(ul);
        // console.log(div);

        // document.body.appendChild(div);
        // ul.append(newLI);
        // div.append(ul);
        // console.log(div)
    }


    // console.log(playRound())
    // for (let i = 0; i < 5; i++) {
    // console.log(playRound(window.prompt("Choose 1: Rock, Paper, or Scissors"), computerPlay()))

    // for (button of buttons) {
    //     button.addEventListener('click', (event) => console.log(`clicked ${event.target.id}`))
    //     console.log(button)
    // }
    // if (userPoints > computerPoints) {
    //     console.log(`You won with a score of ${userPoints} compared to ${computerPoints} point(s) for the computer out of 5 rounds.`)
    // }
    // else {
    //     console.log(`You lost with a score of ${userPoints} compared to ${computerPoints} point(s) for the computer out of 5 rounds.`)
    // }
}

div.append(ul);
document.body.appendChild(div);

game();

