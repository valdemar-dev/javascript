/*
Write a program that asks the user for numbers until the user gives zero. 
The given numbers are printed in the console from the largest to the smallest. (2p)
*/

const numbers: number[] = [];

outer: while (true) {
    const num = parseInt(prompt("Enter a number:")!);

    if (num === 0) {
        break outer;
    }

    numbers.push(num);
}

numbers.sort((a, b) => (b - a));

for (const number of numbers) {
    console.log(number);
}