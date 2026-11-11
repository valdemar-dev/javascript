const numbers = [];

while (true) {
    const number = parseInt(prompt("Enter a number"), 10);

    if (numbers.includes(number)) {
        console.log(`The number ${number} has already been given.`);

        numbers.sort((a, b) => a - b);

        for (const givenNumber of numbers) {
            console.log(givenNumber);
        }

        break;
    }

    numbers.push(number);
}
