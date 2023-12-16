let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate random Target number from 0 to 9:
function generateTarget(){
    return Math.floor(Math.random() * 10);
}

//Check user input number
function userInputCheck(userInput){
    if (userInput > 10){
        return alert("Your guess number should be between 0 and 10, please enter a new guess!");
    }
}

//Get the distance between two numbers
function getAbsoluteDistance(number1, number2){
    return Math.abs(number1 - number2);
}

// Compare the numbers given by the computer and the human with the target number
function compareGuesses(human, computer, target){
    let humanGuess = getAbsoluteDistance(human, target);
    let computerGuess = getAbsoluteDistance(computer, target);
    if (humanGuess === computerGuess){
        return true;
    } else if (humanGuess < computerGuess){
        return true;
    } else if (humanGuess > computerGuess){
        return false;
    }
}

// Update the score of the winner
function updateScore(winner){
    if (winner === "human"){
        humanScore += 1;
    } else if (winner === "computer"){
        computerScore += 1;
    }
}

// Update round number
function advanceRound(){
    currentRoundNumber += 1;
}