let playerScore = document.getElementById("pscore");
let computerScore = document.getElementById("cscore");
let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice")
let resultText=document.getElementById("result");
let result1=document.getElementById("result1");

const genCompChoice = () => {
    let options=["rock","paper","scissors"];
    const ranIndx=Math.floor(Math.random() * 3);
    return options[ranIndx];
}
const drawGame = () =>{
    resultText.innerText="It's a draw";
    resultText.style.backgroundColor="rgb(10, 10, 34)";
}
const showWinner = (userWin,compChoice) =>{
    
    if(userWin){
        userScore++;
        playerScore.innerText=`Player Score: ${userScore}`;
        
        resultText.innerText="you beat the computer";
        resultText.style.backgroundColor="green";
        if(userScore===3){
            
            resultText.innerText="You Win !!";
            resultText.style.backgroundColor="green";
            setTimeout(()=>{
                userScore=0;
                compScore=0;
                playerScore.innerText=`Player Score: ${userScore}`;
                computerScore.innerText=`Computer Score: ${compScore}`;
                resultText.innerText="start the game!!";
                resultText.style.backgroundColor="rgb(10, 10, 34)";
            },2000);
        }
        
    }
    else{
        compScore++;
        computerScore.innerText=`Computer Score: ${compScore}`;
        
        resultText.innerText="computer beats you";
        resultText.style.backgroundColor="red";
        if(compScore===3){
            
            resultText.innerText="You Lose, try again";
            resultText.style.backgroundColor="red";
            setTimeout(()=>{
                userScore=0;
                compScore=0;
                playerScore.innerText=`Player Score: ${userScore}`;
                computerScore.innerText=`Computer Score: ${compScore}`;
                resultText.innerText="start the game!!";
                resultText.style.backgroundColor="rgb(10, 10, 34)";
            },2000);
        }
    }
}
const playGame = (userChoice)=> {
    const compChoice = genCompChoice();
    result1.innerText=`Computer choosen ${compChoice}`;
    if (compChoice===userChoice) {
        drawGame();
    }
    else{

        let userWin = true;
        if (userChoice==="rock"){
            userWin=compChoice==="paper" ?false : true ;
        }
        else if (userChoice==="paper"){
            userWin=compChoice==="scissors" ?false : true ;
        }
        else{
            userWin=compChoice==="rock" ?false : true ;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice)=> {
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

