const numberOfDice = parseInt(prompt("How many dice should be rolled?"), 10);

let sum = 0;

for (let i = 0; i < numberOfDice; i++) {
    sum += Math.floor(Math.random() * 6) + 1;
}

document.body.textContent = `The sum of the dice rolls is: ${sum}`;
