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
  const winText = document.querySelector(".winner");
  const winMethod = document.querySelector(".method");

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      winText.textContent = `It's a draw!`;
      winMethod.textContent = `${humanChoice} and ${computerChoice} are the same!`;
      console.log(humanScore, computerScore, draw);
      draw += 1;
    } else if (
      (humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "scissors" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "rock")
    ) {
      winText.textContent = `You win!`;
      winMethod.textContent = `${humanChoice} beats ${computerChoice}!`;
      console.log(humanScore, computerScore, draw);
      humanScore += 1;
    } else {
      winText.textContent = `You lose!`;
      winMethod.textContent = `${computerChoice} beats ${humanChoice}!`;
      console.log(humanScore, computerScore, draw);
      computerScore += 1;
    }
  }

  playRound(humanChoice, computerChoice);

  if (draw == 5) {
    winText.textContent = "IT'S A DRAW!";
    winMethod.textContent = `${humanScore}/${computerScore}/${draw}`;
    draw = 0;
    computerScore = 0;
    humanScore = 0;
  } else if (computerScore == 5) {
    winText.textContent = "COMPUTER WINS!";
    winMethod.textContent = `${humanScore}/${computerScore}/${draw}`;
    draw = 0;
    computerScore = 0;
    humanScore = 0;
  } else if (humanScore == 5) {
    winText.textContent = "HUMAN WINS!";
    winMethod.textContent = `${humanScore}/${computerScore}/${draw}`;
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
