function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * 3) + 1;

  switch (randomNum) {
    case 1:
      return choices[0];
      break;
    case 2:
      return choices[1];
      break;
    case 3:
      return choices[2];
      break;
  }
}

function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  let answer = "";
  let validAnswer = false;
  do {
    answer = prompt("Rock, paper, scissors?");
    let temp = answer.toLowerCase();
    for (let i = 0; i < choices.length; i++) {
      if (temp === choices[i]) {
        validAnswer = true;
      }
    }
  } while (validAnswer == false);
  return answer;
}

function playGame(gameAmount) {
  let humanScore = 0;
  let computerScore = 0;
  let draw = 0;

  function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();
    if (human == computer) {
      console.log(`It's a draw, ${human} and ${computer} are the same!`);
      return (draw += 1);
    } else if (
      (human == "rock" && computer == "scissors") ||
      (human == "scissors" && computer == "paper") ||
      (human == "paper" && computer == "rock")
    ) {
      console.log(`You win, ${human} beats ${computer}!`);
      return (humanScore += 1);
    } else {
      console.log(`You lose, ${computer} beats ${human}!`);
      return (computerScore += 1);
    }
  }

  for (let i = 0; i < gameAmount; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore == computerScore || draw > (humanScore || computerScore)) {
    console.log(`It's a draw! ${humanScore}/${computerScore}/${draw}`);
  } else if (humanScore < computerScore) {
    console.log(`Computer wins! ${computerScore}/${humanScore}/${draw}`);
  } else if (humanScore > computerScore) {
    console.log(`Human wins! ${humanScore}/${computerScore}/${draw}`);
  }
}

const gameAmount = prompt("How many games would you like to play?");

console.log(playGame(gameAmount));
