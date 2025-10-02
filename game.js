const gameChoices = ["rock", "paper", "scissors"];
let resultDiv = document.querySelector("#result");
const buttons = document.querySelectorAll("button");
let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target.value, getComputerChoice());
  });
});

function getComputerChoice() {
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultDiv.textContent = `Both choose ${humanChoice}, it's tie!`;
  } else if (
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  let resultPara = document.createElement("p");
  resultPara.textContent += `Score: ${humanScore}-${computerScore}`;
  resultPara.style.fontWeight = "bold"
  resultDiv.appendChild(resultPara);

  if (checkWinner()) {
    announceWinner();
    humanScore = 0;
    computerScore = 0;
  }
}

function checkWinner() {
  return humanScore === 5 || computerScore === 5;
}

function announceWinner() {
  humanScore > computerScore
    ? (resultDiv.textContent = `You won the game!`)
    : computerScore > humanScore
    ? (resultDiv.textContent = `You lost the game!`)
    : (resultDiv.textContent = `It's tie!`);
}
