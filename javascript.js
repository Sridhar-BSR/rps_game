
let humanScore = 0;
let computerScore = 0;



const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

function getComputerChoice() {
  const randomNum = Math.random();
  if (randomNum < 1 / 3) {
    return "rock";
  } else if (randomNum < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    resultDiv.textContent = `It's a TIE! BOTH chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultDiv.textContent = `You WIN! ${humanChoice} BEATS ${computerChoice}`;
  } else {
    computerScore++;
    resultDiv.textContent = `You LOSE! ${computerChoice} BEATS ${humanChoice}`;
  }

  scoreDiv.textContent = ` YOU: ${humanScore} | COMPUTER: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      resultDiv.textContent = " You WON the GAME.";
    } else {
      resultDiv.textContent = " computer WON the GAME.";
    }
    Buttons();
  
    
  }
}

function Buttons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}
function resetgame(){
  humanScore =0;
  computerScore=0;
  resultDiv.textContent="PLAY AGAIN!";
  scoreDiv.textContent="YOU: 0 | COMPUTER: 0";

  
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
document.getElementById("reset").addEventListener("click",resetgame);
const stylebody=document.body;
stylebody.style.background="hotpink";
stylebody.style.border="2px double darkorange";

const resetbtn=document.getElementById("reset");
resetbtn.style.color="white";
resetbtn.style.fontWeight="bold";
resetbtn.style.background="#F89880";
resetbtn.style.border="2px solid #FFD04B";
resetbtn.style.borderRadius="10px";
const paper=document.getElementById("paper");
paper.style.border="2px solid #F89880 ";
paper.style.borderRadius="50px 0px 50px 50px ";
const rock=document.getElementById("rock");
rock.style.border="2px solid #F89880 ";
rock.style.borderRadius="0px 50px 50px 50px";
const scissors=document.getElementById("scissors");
scissors.style.border="2px solid #F89880 ";
scissors.style.borderRadius="50px 50px 0px 50px";














