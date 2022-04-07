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
    return "Scissor";
}

function win (user, computer){
    userScore++;
    userScore_span.innerHTML=`<b style="color:#5c5">${userScore}</b>`;
    const smallUserWord = 'User'.fontsize(3).sub();
    const smallComputerWord = 'Comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =  `${convertToWord(user)} ${smallUserWord} <b style="color: #88f">beats</b> ${convertToWord(computer)} ${smallComputerWord}<br> <b style='color:#8f8'> You Win.</b>`;
    userChoice_div.classList.add('green-glow');
    setTimeout(()=> userChoice_div.classList.remove('green-glow'), 300);
}

function lose (user, computer){
    computerScore++;
    userScore_span.innerHTML=userScore;
    const smallUserWord = 'User'.fontsize(3).sub();
    const smallComputerWord = 'Comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    computerScore_span.innerHTML = `<b style="color:#f55">${computerScore}</b>`;
    result_p.innerHTML =  `${convertToWord(user)} ${smallUserWord} <b style="color: #88f">doesn't beat</b> ${convertToWord(computer)} ${smallComputerWord} <br><b style='color:#f88'> You Lose.</b>`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw (user, computer){
    result_p.innerHTML = `<b style="color: #fa2">¡It's a draw!</b>`
    const userChoice_div = document.getElementById(user);
    userChoice_div.classList.add('yellow-glow');
    setTimeout(function (){userChoice_div.classList.remove('yellow-glow')}, 300);
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