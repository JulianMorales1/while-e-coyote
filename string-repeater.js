const prompt = require('prompt-sync')();

let string1 = prompt("Enter a string: ")

let string2 = string1

console.log(string2)

while (string1.length < 10){
    string1 = string1 + string2
    console.log(string1);
}
