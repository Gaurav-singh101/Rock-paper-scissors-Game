let userScore = 0 ;
let computerScore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");


const gencomputerchoice = () => {
    // rock , paper , scissors
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random()* 3);
    return options[randIdx];
}

const Drawgame = () => {
    console.log("Game Draw");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "rgb(1, 1, 62)";
};

const showWinner = (userWin , userChoice , computerchoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win !");
        msg.innerText = (`You win ! ${userChoice} beats ${computerchoice}`);
        msg.style.backgroundColor = "rgb(5, 194, 5)";
    }
    else{
        computerScore++;
        computerScorePara.innerText = computerScore ;
        console.log("You lose");
        msg.innerText = (` You lose . ${computerchoice} beats ${userChoice} `);
        msg.style.backgroundColor = "rgb(237, 6, 22)";
    }
};

const playgame = (userChoice) => {
    // Generate computer choice -> modular
    const computerchoice = gencomputerchoice();

   if(userChoice === computerchoice){
        Drawgame();
        //Draw Game
    }
    else{
        let = userWin = true ;
        if(userChoice === "rock"){
            //scissors , paper
            userWin = computerchoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock , scissors
            userWin = computerchoice === "scissors" ? false : true ;
        }else{
            //rock , paper
            userWin = computerchoice === "rock" ? false : true ;
        }
        showWinner(userWin , userChoice , computerchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});