let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const winMsg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#com-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    winMsg.innerText = "Game was Draw! paly again.";
    winMsg.style.backgroundColor = "Blue";
    winMsg.style.color = "white";
};

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        winMsg.innerText = "You Win!";
        winMsg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Computer wins!");
        winMsg.innerText = "You lose!";
        winMsg.style.backgroundColor = "Red";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
          } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissor" ? false : true;
          } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
          }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    });
});

