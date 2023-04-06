//#1 User Input: Play game
let playGame = confirm("shall we play the game");
//#2 Check the value and respond
if (playGame) {
  //#3 Player chooses rock, paper, or scissors
  let playerChoice = prompt("please enter rock, paper, or scissors");
  //#4 Handle the response
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
      //#5 Computer player makes a choice
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
      //#6 Rock-Paper-Scissors logic tree
      let result =
        playerOne === computer
          ? "tie game"
          : playerOne === "rock" && computer === "paper"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
            : playerOne === "paper" && computer === "scissors"
              ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
              : playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
                : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins`
      alert(result);
      //#7 Display winner! Ask to play again
      let playAgain = confirm("Play Again????");
      playAgain ? location.reload() : alert("Ok, thank you for playing");
    } else {
      alert("you did not enter anything, my man");
    }
  } else {
    alert("I guess you changed your mind")
  }
} else {
  alert("Better luck next time, buddy");
}