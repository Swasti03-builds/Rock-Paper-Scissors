let userScore=0;
let compScore=0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector(".message");
const choice1 = document.querySelector("#choice1");
const choice2 = document.querySelector("#choice2");
const userPoints = document.querySelector("#user");
const compPoints = document.querySelector("#comp");

choice.forEach((choice)=>{
    choice.addEventListener(("click"), () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
const showChoices = (userChoice,compChoice)=>{
    choice1.innerText = `Your choice :${userChoice}`;
    choice2.innerText = `Computer choice :${compChoice}`;
}
const generateChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}
const drawGame=()=>{
    msg.innerText="It's a Draw !";
    msg.style.backgroundColor = "#adb5bd";
    msg.style.color = "#000000";
};
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userPoints.innerText=userScore;
        msg.innerText="Yayyy ! You win";
        msg.style.backgroundColor="#76c893";
        msg.style.color = "#081c15";
    }
    else{
        compScore++;
        compPoints.innerText=compScore;
        msg.innerText="Oh no. You lost";
        msg.style.backgroundColor="#ff5a5f";
        msg.style.color = "#000000";
    }
}

const playGame = (userChoice) =>{
    const compChoice = generateChoice();
    showChoices(userChoice,compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock")
        {userWin = compChoice === "paper"? false:true;}
        else if (userChoice==="paper")
        {userWin = compChoice==="rock"? true:false;}
        else 
        {userWin = compChoice==="paper"? true:false;}
        showWinner(userWin,userChoice,compChoice);
    }
}