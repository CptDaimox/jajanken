// game variables
let score = { lose: 0, win: 0, tie: 0 };
const jankenSet = ["Rock", "Paper", "Scissors"];
const resultEmoji = { lost: "🙊", won: "🤌" };
// html elements
const buttons = document.querySelectorAll(".btn");
const playerScore = document.querySelector("#player");
const computerScore = document.querySelector("#computer");
const winText = document.querySelector("h2");
const resultText = document.querySelector("h3");
const resetBtn = createResteBtn();

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!isGameOver()) {
      let computer = computerPlay();
      let player = convertChoice(button.id);

      result = playRound(computer, player);
      score[result]++;

      textResult = createResultText(result, computer, player).split("!");
      winText.textContent = textResult[0];
      resultText.textContent = textResult[1];
      playerScore.textContent = `🐵: ${score["win"]}`;
      computerScore.textContent = `🤖: ${score["lose"]}`;
    }

    if (isGameOver()) endGame();
  });
});

function isGameOver() {
  return score["lose"] == 5 || score["win"] == 5;
}

function endGame() {
  score.end = score.lose > score.win ? "lost" : "won";
  winText.textContent = `You ${score.end} the game ${resultEmoji[score.end]}`;
  resultText.replaceWith(resetBtn);
}

function resetGame() {
  score = { lose: 0, win: 0, tie: 0 };
  resetBtn.replaceWith(resultText);
  winText.textContent = "Choose wisely!";
  playerScore.textContent = `🐵: 0`;
  computerScore.textContent = `🤖: 0`;
}

function createResteBtn() {
  btn = document.createElement("button");
  btn.setAttribute("id", "reset");
  btn.addEventListener("click", () => resetGame());
  btn.textContent = "Play again";
  btn.addEventListener("click", resetGame);
  return btn;
}

function computerPlay() {
  return Math.floor(Math.random() * 3);
}

function playRound(computer, player) {
  diff = player - computer;
  // Win
  if (diff == 1 || diff == -2) return "win";
  // Lose
  else if (diff == 2 || diff == -1) return "lose";
  // Tie
  else return "tie";
}

function game() {
  let gameResult = [0, 0, 0];
  let cpu,
    player,
    result = 0;
  let resultText = "";

  for (let i = 0; i < 5; i++) {
    cpu = computerPlay();
    player = 0; //prompt("Choose Rock, Paper or Scissors")
    resultText = createResultText(cpu, player);
    gameResult[result]++;
    console.log(resultText);
  }
  if (gameResult[0] == gameResult[1]) console.log("It's tied!");
  else if (gameResult[0] > gameResult[1]) console.log("You won!");
  else console.log("You lost!");
}

function convertChoice(choice) {
  choice = choice.toLowerCase();
  switch (choice) {
    case "rock":
      return 0;
    case "paper":
      return 1;
    case "scissors":
      return 2;
  }
}

function createResultText(result, computer, player) {
  switch (result) {
    case "lose":
      return `You Lose! ${jankenSet[computer]} beats ${jankenSet[player]}`;
    case "win":
      return `You Win! ${jankenSet[player]} beats ${jankenSet[computer]}`;
    case "tie":
      return "It's a tie! Can't beat fire with fire";
  }
}
