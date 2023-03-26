
// Write function that will return random letter from your name

// This is my own solution, based on what I have picked up

const myName = "黎興獨行道烈火拳逆鱗拳烈火真拳"
function generateMyName() {  
    
    return myName[Math.floor(Math.random() * myName.length)]
}

console.log(generateMyName());

// Dave's solution is here
const hisName = "Le Hung"; 
console.log(typeof hisName);
console.log(hisName.charAt(Math.floor(Math.random() * 6)));
console.log(hisName.charAt(Math.floor(Math.random() * hisName.length)));
