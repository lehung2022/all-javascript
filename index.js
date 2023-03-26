
// Write function that will return random letter from your name

function generateRandomLetter() {
    const alphabet = "newman56syntax48Buoyancy20vaguest"

    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

console.log(generateRandomLetter())
console.log(generateRandomLetter())
console.log(generateRandomLetter())
console.log(generateRandomLetter())
console.log(generateRandomLetter())
console.log(generateRandomLetter())
// The above solution is what I picked up on the Internet. We will see how Dave does it
// This is my own solution, based on what I have picked up

const myName = "Le Hung. My Hanzi name is 黎興"
function generateMyName() {  
    
    return myName[Math.floor(Math.random() * myName.length)]
}

console.log(generateMyName());

// Dave's solution is here
const hisName = "Le Hung/黎興"; 
console.log(typeof hisName);
console.log(hisName.charAt(Math.floor(Math.random() * 6)));
