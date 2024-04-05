/* Simulate a dice roll using JavaScript and return a random integer between 1 and 6.*/
function diceFunc() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(diceFunc());
