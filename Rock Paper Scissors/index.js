let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        result = "You win!";
    } else {
        computerScore++;
        result = "Computer wins!";
    }

   
    document.getElementById("result").textContent = `Player: ${playerChoice}, Computer: ${computerChoice}. ${result}`;
    document.getElementById("score").textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;

    
    if (playerScore === 5 || computerScore === 5) {
        let finalResult = playerScore === 5 ? "Congratulations, you won the game!" : "Computer won the game!";
        document.getElementById("finalResult").textContent = finalResult;

      
        playerScore = 0;
        computerScore = 0;
    }
}

