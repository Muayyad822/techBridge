function play(yourChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    let result = "";
    
    if (yourChoice == computerChoice) {
        result = "It's a tie!";
    }
    else if (
        (yourChoice == "rock" && computerChoice == "scissors") ||
        (yourChoice == "paper" && computerChoice == "rock") ||
        (yourChoice == "scissors" && computerChoice == "paper")
    ){
        result = "You win!";
    }
    else {
        result = "Computer wins!";
    }

    document.getElementById("yourChoice").textContent = `You picked: ${yourChoice}`; 
    document.getElementById("computerChoice").textContent =  `Computer picked: ${computerChoice}`; 
    document.getElementById("result").textContent =  result;

}
