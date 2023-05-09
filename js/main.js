"use strict"
const makeErrors = () => {
    let i = 1;
    while(i <= 5) {
        try {
           if (i % 2 !== 0) {
            throw new Error("Odd number")
           } else {
            console.log("Even number")
           }
        } catch (err) {
            console.error(err.stack);
        } finally {
            console.log("finally, we have reached the end");
            i++;

        }
    }
}
makeErrors();