const getComputerChoice = ["Rock", "Paper", "Scissors"];
const getHumanChoice = ["Rock", "Paper", "Scissors"];

let computerIndex = 0;
let humanScore = 0;
let computerScore = 0;
let question = prompt("What you chose between 'Rock', 'Paper' and 'Scissors' ?")

computerIndex = Math.floor(Math.random() * getComputerChoice.length);

function playRound(humanChoice, computerChoice) {
    humanChoice = question.toLowerCase();
    computerChoice = getComputerChoice[computerIndex]

    if(humanChoice == "rock" && computerChoice == 'Rock'){
        return "It's a tie, you both chosed rock!"
    } else if (humanChoice == "rock" && computerChoice == "Paper"){
        computerScore++;
        return "Paper beats rock! Computer wins! Computer score: " + computerScore;
    } else if (humanChoice == "rock" && computerChoice == "Scissors"){
        humanScore++;
        return "Rock beats scissors! You win! Your score: " + humanScore;
    } else if (humanChoice == "paper" && computerChoice == "Rock"){
        humanScore++;
        return "Paper beats rock! You win! Your score: " + humanScore;
    } else if (humanChoice == "paper" && computerChoice == "Paper"){
        return "It's a tie, you both chosed paper!";
    } else if (humanChoice == "paper" && computerChoice == "Scissors"){
        computerScore++;
        return "Scissors beats paper! Computer wins! Computer score: " + computerScore;
    } else if (humanChoice == "scissors" && computerChoice == "Rock"){
        computerScore++;
        return "Rock beats scissors! Computer wins! Computer score: " + computerScore
    } else if (humanChoice == "scissors" && computerChoice == "Paper"){
        humanScore++
        return "Scissors beats paper! You win! Your score: " + humanScore;
    } else if (humanChoice == "scissors" && computerChoice == "Scissors"){
        return "It's a tie, you both chosed scissors!"
    } else {
        return "You must enetr a valid word, " + "'" + question + "'" + " is not valid"
    }

}

function playGame(){
    
}

playGame()


    


