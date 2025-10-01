const gameChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

function getHumanChoice() {
  return prompt("enter rock, paper or scissors").toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`Both choose ${humanChoice}, it's tie!`);
    } else if (
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  humanScore > computerScore
    ? console.log(`You won the game! ${humanScore}-${computerScore}`)
    : computerScore > humanScore
    ? console.log(`You lost the game! ${humanScore}-${computerScore}`)
    : console.log(`It's tie! ${humanScore}-${computerScore}`);
}


playGame()