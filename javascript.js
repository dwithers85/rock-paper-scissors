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

let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice());
console.log(getHumanChoice());
