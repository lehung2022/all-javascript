let player = "scissors";
let computer = "paper";

switch (player) {
    case computer:
        console.log("It is a tie game!")
        break;
    case "rock":
        if (computer === "paper") {
            console.log("computer wins")
        } else if (computer === "scissors") {
            console.log("player wins")
        } else {
            console.log("it is a tie game!")
        }
        break;
    case "paper":
        if (computer === "paper") {
            console.log("It is a tie game")
        } else if (computer === "scissors") {
            console.log("player wins")
        } else {
            console.log("computer wins")
        }
        break;
    case "scissors":
        if (computer === "rock") {
            console.log("computer wins")
        } else if (computer === "paper") {
            console.log("player wins")
        } else if (conputer === "scissor") {
            console.log("It is a tie game")
        }

        break;

    default:
        break;
}