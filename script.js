let msg = document.querySelector("#msg");
let userChoice = document.querySelectorAll(".box");
let user_score = document.querySelector("#user-score"); 
let comp_score = document.querySelector("#comp-score");
let userScore = 0;
let compScore = 0;

let compChoices = ["rock","paper","scissor"];

let compchoice = () =>{
     let rand = Math.floor(Math.random() * 3);
     return compChoices[rand];
}

userChoice.forEach((user)=>{
    user.addEventListener("click",()=>{
        playGame(user.getAttribute("id"));
    });
});

const playGame = (userBtn)=>{
    const compBtn = compchoice();
    if(userBtn===compBtn) 
    {
        drawGame();
        return;
    }
    let userWin = true;

    if(userBtn==="rock")
    {
        //paper,scissors
        userWin = compBtn === "paper" ? false:true;
    }
    else if(userBtn ==="paper")
    {
        //rock,scissor
        userWin = compBtn === "scissor" ? false:true;
    }
    else{
        //scissor,rock
        userWin = compBtn === "rock" ? false:true;
    }

    declareWinner(userWin,userBtn,compBtn);
}

const declareWinner = (userWin,userBtn,compBtn)=>{
    if(userWin)
    {
        userScore++;
        user_score.innerText = userScore;
        msg.innerText = `You Won! Your ${userBtn} beats ${compBtn}`;
        msg.style.backgroundColor = "Green";
        msg.style.color = "white";
    }
    else{
        compScore++;
        comp_score.innerText = compScore;
        msg.innerText = `You Lost! ${compBtn} beats your ${userBtn}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

const drawGame = () =>{
    msg.innerText = `Game Draw!`;
    msg.style.backgroundColor = "#cca7a2"
    msg.style.color = "black";
}