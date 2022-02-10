const prompt = require('prompt-sync')();

let count = Number(prompt("Enter a number to double: "))

while (count < 100){
    count = count * 2
    console.log(count)
}

console.log("Your number over 100 is: " + count);
