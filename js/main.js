const score = [60, 70, 80];


const scoreRating =
  score > 70
    ? "Excellent"
    : score > 50
    ? "Average"
    : "Do better"

console.log(scoreRating)
// "Average"