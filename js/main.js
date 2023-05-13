// This chapter will be about Local and Session Storage
// (0:14) Web Storage is part of the global window object
// (7:50) Why JSON is the perfect match for web storage
const myArray = ["eat", "sleep", "code"];

const myObject = {
    name: "Hung",
    hobbies: ["fighting", "training", "listening to music"],
    logName: function() { 
        console.log(this.name);
     }
};


myObject.logName();
// (4:48) setItem
sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
// (6:20) getItem
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);

// (14:55) Retrieving an item that does not exist

// (15:25) Clear all items

// (15:55) Get the key at a specific index position

// (17:10) Return how many keys are in storage
localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const key = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(key);