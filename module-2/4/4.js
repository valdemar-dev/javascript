const numbers = [];

while (true) {
    const number = parseInt(prompt("Enter a number:"), 10);

    if (number === 0) {
        break;
    }

    numbers.push(number);
}

numbers.sort((a, b) => b - a);

for (const number of numbers) {
    console.log(number);
}
