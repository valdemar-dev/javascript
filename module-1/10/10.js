const SIMULATION_COUNT = 10000;
const DICE_SIDES = 6;

function rollDie() {
    return Math.floor(Math.random() * DICE_SIDES) + 1;
}

function rollSum(numberOfDice) {
    let sum = 0;

    for (let i = 0; i < numberOfDice; i++) {
        sum += rollDie();
    }

    return sum;
}

const numberOfDice = parseInt(prompt("Enter the number of dice"), 10);
const targetSum = parseInt(prompt("Enter the sum of the eye numbers"), 10);

let matchingRolls = 0;

for (let i = 0; i < SIMULATION_COUNT; i++) {
    if (rollSum(numberOfDice) === targetSum) {
        matchingRolls++;
    }
}

const probability = (matchingRolls / SIMULATION_COUNT) * 100;

document.body.textContent =
    `Probability to get sum ${targetSum} with ${numberOfDice} dice ` +
    `is ${probability.toFixed(2)}%`;
