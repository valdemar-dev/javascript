/*
Write a program that prompts for three integers. 
The program prints the sum, product and average of the numbers to the HTML document. (3p)
remember to convert strings to numbers when adding them together.
*/

const numberOne = parseInt(prompt("Enter a number")!);
const numberTwo = parseInt(prompt("Enter a number")!);
const numberThree = parseInt(prompt("Enter a number")!);

const sum = numberOne+numberTwo+numberThree;
const product = numberOne*numberTwo*numberThree;

// In case you were wondering, yes; I'm aware that this is a really bad way to do this, but in my defense, it's kind of funny.
const finalString = `Sum: ${sum}<br/>Product: ${product}<br/>Average: ${sum / 3}`;

document.body.innerHTML = finalString;
