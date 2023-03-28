const score1 = 45;
const score2 = 50;

const scoreRating =
    score1 > 70
        ? "Excellent"
        : score1 > 50
            ? "Average"
            : score1 > 40
                ? "Fair"
                : "Do better"

console.log(scoreRating)
// "Fair"

const scoreRating2 = score2 > 70 ? "Brilliant" : score2 > 50 ? "Need more effort" : score2 > 40 ? "That's it?" : "Do better"
console.log(scoreRating2);