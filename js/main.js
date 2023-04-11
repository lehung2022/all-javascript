// Intro 
// Loops and Iteration will be the main topic of today's lesson
// While Loops

// Do not create an endless loop (but don't feel bad if you do..it happens)

// Do While Loops

// The difference of a Do While Loop

// For Loops

// Initialize the counter variable

// Conditional statement

// Increment the counter

// Using the length property of a variable in a for loop

// While (true)

// Break Statements

// Continue Statements
let myName = "Le Hung";
let counter = 0;
let myLetter;
while(counter <= 3) {
	myLetter = myName[counter];
	console.log(myLetter);
	if (counter === 1) {
		counter += 2;
		continue;
	}
	if (myLetter === "v") break;
	counter++;	

}
console.log(counter);

