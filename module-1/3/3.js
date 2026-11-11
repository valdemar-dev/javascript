const numberOne = parseInt(prompt("Enter a number"), 10);
const numberTwo = parseInt(prompt("Enter a number"), 10);
const numberThree = parseInt(prompt("Enter a number"), 10);

const sum = numberOne + numberTwo + numberThree;
const product = numberOne * numberTwo * numberThree;
const average = sum / 3;

document.body.innerHTML =
    `Sum: ${sum}<br>Product: ${product}<br>Average: ${average}`;
