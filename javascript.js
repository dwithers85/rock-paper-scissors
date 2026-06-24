console.log("Hello World");

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

function getHumanChoice(roundNumber){
    let result = prompt("Round "+roundNumber+"\nEnter rock, paper, or scissors");
    return result.toLowerCase();
}//getHumanChoice

function playRound(computerChoice,humanChoice){
    console.log("Computer: "+ computerChoice+"\nHuman: "+humanChoice);
    if(computerChoice === humanChoice){
        return "draw";
    }else if(computerChoice === "rock" && humanChoice === "paper"){
        humanScore += 1;
        return "human wins";
    }else if(computerChoice === "rock" && humanChoice === "scissors"){
        computerScore += 1;
        return "computer wins";
    }else if(computerChoice === "paper" && humanChoice === "rock"){
        computerScore += 1;
        return "computer wins";
    }else if(computerChoice === "paper" && humanChoice === "scissors"){
        humanScore += 1;
        return "human wins";
    }else if(computerChoice === "scissors" && humanChoice ==="rock"){
        humanScore += 1;
        return "human wins";
    }else if(computerChoice === "scissors" && humanChoice === "paper"){
        computerScore += 1;
        return "computer wins";
    }else{
        return "I'm Not Sure who won??!!";
    }
}//round

function playGame(){
    for(let i=0; i<5; i++){
        console.log("Round " +(i+1));
        console.log(playRound(getComputerChoice(), getHumanChoice(i+1)));
        console.log("Score: Human-"+humanScore+" Computer-"+computerScore);
    }//5 rounds
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

playGame();

