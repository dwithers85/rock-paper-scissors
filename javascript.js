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

function getHumanChoice(){
    let result = prompt("Enter rock, paper, or scissors");
    return result.toLowerCase();
}//getHumanChoice

function playRound(computerChoice,humanChoice){
    console.log("Computer: "+ computerChoice+"\nHuman: "+humanChoice);
    if(computerChoice === humanChoice){
        return "draw";
    }else if(computerChoice === "rock" && humanChoice === "paper"){
        return "human wins";
    }else if(computerChoice === "rock" && humanChoice === "scissors"){
        return "computer wins";
    }else if(computerChoice === "paper" && humanChoice === "rock"){
        return "computer wins";
    }else if(computerChoice === "paper" && humanChoice === "scissors"){
        return "human wins";
    }else if(computerChoice === "scissors" && humanChoice ==="rock"){
        return "human wins";
    }else if(computerChoice === "scissors" && humanChoice === "paper"){
        return "computer wins";
    }else{
        return "I'm Not Sure who won??!!";
    }
}//round
let humanScore = 0;
let computerScore = 0;

console.log(playRound(getComputerChoice(), getHumanChoice()));
