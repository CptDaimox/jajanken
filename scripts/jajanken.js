const jankenSet = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return Math.floor(Math.random() * 3);
}

function playRound(computer, player) {
  diff = player - computer;
  // Win
  if (diff == 1 || diff == -2) return 1;
  // Lose
  else if (diff == 2 || diff == -1) return 0;
  // Tie
  else return 2;
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

console.log(game());

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

function createResultText(computer, player) {
  let result = playRound(computer, player);
  switch (result) {
    case 0:
      return `You Lose! ${jankenSet[computer]} beats ${jankenSet[player]}`;
    case 1:
      return `You Win! ${jankenSet[player]} beats ${jankenSet[computer]}`;
    case 2:
      return "It's a tie!";
  }
}
