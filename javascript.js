const btnContainer = document.querySelector("#btnContainer");
const msgBanner = document.querySelector("#msgBanner");
const winnerAnnouncement = document.querySelector("#winnerAnnouncement");
const scoreBoard = document.querySelector("#scoreBoard");

btnContainer.addEventListener('click', (e)=>{
    let btn = e.target.id;
    if(newGameBit){
        humanScore = 0;
        computerScore = 0;
        newGameBit = 0;
    }
    switch(btn){
        case 'rock':
            playRound(getComputerChoice(), "rock");
            break;
        case 'paper':
            playRound(getComputerChoice(), "paper");
            break;
        case 'scissors':
            playRound(getComputerChoice(), "scissors");
            break;
    }//switch
});

function getComputerChoice(){
    let x = Math.floor(Math.random()*3);
    if (x === 0){
        return "rock";
        
    
    }else if(x===1){
        return "paper";
    }else if(x===2){
        return "scissors";
    }
}//getComputer Choice

// function getHumanChoice(roundNumber){
//     let result = prompt("Round "+roundNumber+"\nEnter rock, paper, or scissors");
//     return result.toLowerCase();
// }//getHumanChoice

function playRound(computerChoice,humanChoice){
    msgBanner.textContent = `Computer Choice: ${computerChoice}\nHuman Choice: ${humanChoice}`;
    if(computerChoice === humanChoice){
        updateBanner("draw");
    }else if(computerChoice === "rock" && humanChoice === "paper"){
        updateBanner("humanWins");
    }else if(computerChoice === "rock" && humanChoice === "scissors"){
        updateBanner("computerWins");
    }else if(computerChoice === "paper" && humanChoice === "rock"){
        updateBanner("computerWins");
    }else if(computerChoice === "paper" && humanChoice === "scissors"){
       updateBanner("humanWins");
    }else if(computerChoice === "scissors" && humanChoice ==="rock"){
      updateBanner("humanWins");
    }else if(computerChoice === "scissors" && humanChoice === "paper"){
       updateBanner("computerWins");
    }else{
        return "I'm Not Sure who won??!!";
    }
}//round

function updateBanner(winner){
    if (winner === "draw"){
         winnerAnnouncement.textContent = "It's a Draw!";
    }else if(winner === "humanWins"){
         winnerAnnouncement.textContent = "The Human Wins the Round!";
         humanScore += 1;
    }else if(winner === "computerWins"){
         winnerAnnouncement.textContent = "The Computer Wins the Round!";
         computerScore += 1;
    }
   
    scoreBoard.textContent = `Human Score: ${humanScore}  Computer Score: ${computerScore}`;
    
    if(humanScore >= 5){
        winnerAnnouncement.textContent = "The Human Wins the GAME!! Click a button to start the next game!";
        newGameBit = 1;
    }
    if(computerScore >= 5){
        winnerAnnouncement.textContent = "The Computer Wins the GAME!!\nClick a button to start the next game!";
        newGameBit =1;
    }
}
function playGame(){
    
    
    
    //for(let i=0; i<5; i++){
    //     console.log("Round " +(i+1));
    //     console.log(playRound(getComputerChoice(), getHumanChoice(i+1)));
    //     console.log("Score: Human-"+humanScore+" Computer-"+computerScore);
    // }//5 rounds
    if(humanScore > computerScore){
        console.log("Game Over: the human wins!");
    }else if(computerScore > humanScore){
        console.log("Game Over: the computer wins!");
    }else{
        console.log("Game over: It's a tie! Please play again");
    }
}
let humanScore = 0;
let computerScore = 0;
let newGameBit = 0;

//playGame();

