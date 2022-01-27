// for (var i=0; i<100; i++) {
//     console.log(Math.floor(Math.random() *6) +1)
// }

//Function's purpose: generate a random value between 1 and 6
//Input: nothing
//Output: a random number between 1 and 6

// function rollDice() {
//     return Math.floor(Math.random() *6) + 1; 
// }

// for(var i=0;i<100;i++) {
//     console.log(rollDice())
// }

// rollDice(numSides)
//Function's purpose: get a random value between 1 and the number of sides of our die.
//Input: number of sides
//Output: a random number between 1 and the number of sides

// function rollDice(numSides) {
//     return Math.floor(Math.random() * numSides) + 1;
// }

// for (var i = 0; i < 100; i++) {
//     console.log(rollDice(12));
// }


// next part using propmpt
var numSides = prompt("How many sides does the die have?");

function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

for (var i = 0; i < 100; i++) {
    console.log(rollDice(numSides));
}