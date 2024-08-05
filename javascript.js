function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;

  switch (randomNum) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}

function playGame(humanChoice, computerChoice) {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      console.log(
        `It's a draw, ${humanChoice} and ${computerChoice} are the same!`
      );
      return (draw += 1);
    } else if (
      (humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "scissors" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "rock")
    ) {
      console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
      return (humanScore += 1);
    } else {
      console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
      return (computerScore += 1);
    }
  }

  playRound(humanChoice, computerChoice);

  if (draw == 5) {
    console.log(`It's a draw! ${humanScore}/${computerScore}/${draw}`);
    draw = 0;
    computerScore = 0;
    humanScore = 0;
  } else if (computerScore == 5) {
    console.log(`Computer wins! ${computerScore}/${humanScore}/${draw}`);
    draw = 0;
    computerScore = 0;
    humanScore = 0;
  } else if (humanScore == 5) {
    console.log(`Human wins! ${humanScore}/${computerScore}/${draw}`);
    draw = 0;
    computerScore = 0;
    humanScore = 0;
  }
}

const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");

let humanChoice = "";
let computerChoice = "";

let humanScore = 0;
let computerScore = 0;
let draw = 0;

rockButton.addEventListener("click", () => {
  humanChoice = "rock";
  computerChoice = getComputerChoice();

  playGame(humanChoice, computerChoice);
});
paperButton.addEventListener("click", () => {
  humanChoice = "paper";
  computerChoice = getComputerChoice();

  playGame(humanChoice, computerChoice);
});
scissorsButton.addEventListener("click", () => {
  humanChoice = "scissors";
  computerChoice = getComputerChoice();

  playGame(humanChoice, computerChoice);
});

/*
variable of buttons are assigned
if button pressed then the game starts
it only stops when someone gets 5 points or draws at 5
*/
