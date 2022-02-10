const prompt = require('prompt-sync')();

let x = Number(prompt("Enter a number: "));

let y = Number(prompt("Enter a second number: "));

while (x / y !== Math.round(x / y)){
    x = x + 1
    console.log(x)
}
console.log(x +" " + "Is divisible by" + " " + y);
