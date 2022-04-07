let userScore = 0;
let computerScore= 0;
const userScore_span= document.getElementById("user-score");
const computerScore_span= document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p= document.querySelector(".result > p");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissors_div= document.getElementById("s");

function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord (letter){
    if(letter==="r") return "Rock";
    if(letter ==="p") return "Paper";
    return "Scissors";
}

function win (user, computer){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =  `${convertToWord(user)} <b style="color: #88f">beats</b> ${convertToWord(computer)} <br> <b style='color:#8f8'> You Win.</b>`;
}

function lose (user, computer){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =  `${convertToWord(user)} <b style="color: #88f">doesn't beat</b> ${convertToWord(computer)} <br><b style='color:#f88'> You Lose.</b>`;
}

function draw (){
    result_p.innerHTML = `<b style="color: #88f">¡It's a draw!</b>`
}

function game(userChoice){
   const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
              
    }   
}

function main(){
    rock_div.addEventListener("click", function(){
        game("r");
    });

    paper_div.addEventListener("click", function(){
        game("p");
    });

    scissors_div.addEventListener("click", function(){
        game("s");
    });
}

main();