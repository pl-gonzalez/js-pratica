// Jo Ken Po

const choices = ["rock", "paper", "scissors"]


const playerDisplay = document.getElementById("playerDisplay")

const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")

const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playgame() {
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    const playerChoice = choices[Math.floor(Math.random() * 3)];
    

    let result = ''
    console.log(computerChoice)

    if (playerChoice === computerChoice) {
        result = "TIE!"
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE"
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE"
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE"
                break;
            
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText")

    switch (result) {
        case "YOU WIN":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore
            break;
        case "YOU LOSE":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore
            break;
        
    }
}


// setInterval(playgame, 1000)


/** HTML for this JS: 
 * 
 *  <h1> Rock - Paper - Scissors</h1>

    <div class="choices">
        <button onclick="playgame('rock')">👊</button>
        <button onclick="playgame('paper')">🤚</button>
        <button onclick="playgame('scissors')">✌️</button>
    </div>

    <div class="" id="playerDisplay">PLAYER: </div>
    <div class="" id="computerDisplay">COMPUTER: </div>
    <div class="" id="resultDisplay"></div>

    <div class="scoreDisplay">Player Score
        <span id="playerScoreDisplay">0</span>
    </div>
    <div class="scoreDisplay">Computer Score
        <span id="computerScoreDisplay">0</span>
    </div>

 */