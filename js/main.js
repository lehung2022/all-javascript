let myName = prompt("Please enter your name");
if (myName) {
  console.log(myName.trim());
  console.log(myName.length);
  console.log(myName.trim().length);
} else {
  console.log("You did not enter your name");
}