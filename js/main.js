const myWeapon = {
    theName: "刀", 
    durability: 80,
    strength: 75,    
    level: 50,
    defense: 45,
    weight: 20,
};
console.log(myWeapon);

const mySelf = {
    myName: "黎興",
    hobbies: ["fighting", "learning to code", "sleep with pretty women", "lick their boobs"],
    kick: function() {
        console.log("kick their asses");
    }
}
console.log(mySelf.myName);
console.log(mySelf.hobbies[0]);
mySelf.kick();
console.log(typeof mySelf);

// send JSON here will convert the original object into a bunch of strings
const sendJSON = JSON.stringify(mySelf);
console.log(sendJSON);
console.log(typeof sendJSON);
// convert JSON here will convert the strings back to the original object
const convertJSON = JSON.parse(sendJSON);
console.log(convertJSON);
console.log(convertJSON.myName);