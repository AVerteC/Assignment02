let randomNumber = Math.round(Math.random());
let coinFlip = randomNumber;
let choice = prompt("Enter 'Heads' or 'Tails':");
let isTails = false;
if (choice !== "Heads" && choice !== "Tails") {
    alert("Please enter 'Heads' or 'Tails'.");
}
if (coinFlip < 1) {
    // coin landed Head side up
    if (choice === "Heads") {
        alert("The flip was heads and you chose heads...you win!");
    }
    
    if (choice === "Tails") {
        alert("The flip was heads but you chose tails...you lose!");
    }
}

if (coinFlip > 0) {
    // coin landed Tail side up 
    if (choice === "Heads") {
        alert("The flip was tails but you chose heads...you lose!");
    }
    if (choice === "Tails") {
        alert("The flip was tails and you chose tails...you win!");
    }
}
