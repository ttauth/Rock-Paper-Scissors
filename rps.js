// Get computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Determine the result of the game
function determineWinner(playerSelect, compSelect) {
    if (
        (playerSelect === "Scissors" && compSelect === "scissors") ||
        (playerSelect === "Rock" && compSelect === "rock") ||
        (playerSelect === "Paper" && compSelect === "paper")
    )  {
        return "tied";
    } else if (
        (playerSelect === "Rock" && compSelect === "scissors") ||
        (playerSelect === "Paper" && compSelect === "rock") ||
        (playerSelect === "Scissors" && compSelect === "paper")
    ) {
        return "you win";
    } else {
        return "you lose";
    }
}

// Highlight CPU's choice
function highlightComputerChoice(choice) {
    const button = document.getElementById(choice);
    button.classList.add("active");
}

// Clear highlights
function clearHighlights() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.classList.remove("active"));
}

// Play a round of the game
function playRound(playerChoice) {
    const compChoice = getComputerChoice();
    highlightComputerChoice(compChoice);
    const result = determineWinner(playerChoice, compChoice);
     // Update the result on the screen
    const resultElement = document.getElementById("result");
    resultElement.textContent = `You chose ${playerChoice}, CPU chose ${compChoice}. Result: ${result}.`;
 
    setTimeout(clearHighlights, 1000);
    return result;
}

// Attach event listeners to buttons
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        const playerChoice = this.id;
        const result = playRound(playerChoice);
        console.log(result);
    });
});
// Key points of improvement:

// Use Arrays for Choices: You can use an array for the choices instead of a switch statement for the CPU's choice.

// Simplify Result Logic: The determineWinner function uses conditional statements to determine the result based on the chosen options.

// Separation of Concerns: The code is organized into separate functions for different purposes, improving readability and maintainability.

// Event Listeners: The event listeners are attached only once in this code. Previously, they were inside a loop which wasn't necessary and could lead to unexpected behavior.

// Remember to adapt the CSS classes and structure according to your styling needs.





