let userScore = 0;
let computerScore = 0;
let drawCount = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const emojis = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
  };

  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let resultText = '';
  let resultClass = '';

  if (userChoice === computerChoice) {
    resultText = "🤝 It's a draw!";
    resultClass = 'draw';
    drawCount++;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    resultText = "✅ You win!";
    resultClass = 'win';
    userScore++;
  } else {
    resultText = "❌ Computer wins!";
    resultClass = 'lose';
    computerScore++;
  }

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    You chose: ${emojis[userChoice]} | Computer chose: ${emojis[computerChoice]} <br> ${resultText}
  `;
  resultDiv.className = `result ${resultClass}`;

  document.getElementById('scoreboard').innerHTML = `
    🧍 You: ${userScore} | 💻 Computer: ${computerScore} | 🤝 Draws: ${drawCount}
  `;
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  drawCount = 0;

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = "Game reset!";
  resultDiv.className = "result";

  document.getElementById('scoreboard').innerHTML = "🧍 You: 0 | 💻 Computer: 0 | 🤝 Draws: 0";
}
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});