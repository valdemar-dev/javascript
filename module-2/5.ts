/*
Write a program that prompts the user for numbers. 
When the user enters one of the numbers previously entered, the program 
will announce that the number has already been given and stops its operation and then 
prints all the given numbers to the console in ascending order. (2p)
*/

const numbers: number[] = [];

const printNumbers = () => {
    numbers.sort((a, b) => (a - b));

    for (const number of numbers) {
        console.log(number);
    }
}

while (true) {
    const num = parseInt(prompt("Enter a number")!);

    if (numbers.includes(num)) {
        console.log(`The number ${num} has already been given.`);
        printNumbers();
        break;
    }

    numbers.push(num);
}