let score = prompt("Enter your score from 0 to 100:");
let numScore = parseInt(score);

if (numScore < 1 || numScore > 100) {
    alert("Only numbers between 1 and 100 are accepted.");
}
else if (isNaN(numScore)) {
    alert("Please enter a valid number.");
}
else if (numScore >= 60 && numScore <= 69) {
    console.log("You received a D");
}
else if (numScore >= 70 && numScore <= 79) {
    console.log("You received a C");
}
else if (numScore >= 80 && numScore <= 89) {
    console.log("You received a B");
}
else if (numScore >= 90 && numScore <= 100) {
    console.log("You received a A");
}
else {
    console.log("You received a F");
}
    