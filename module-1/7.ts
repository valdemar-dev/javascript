/*
Write a program that rolls user defined number of dice and displays the sum of the results of the dice rolls.(2p)
First, program asks the user for the number of dice rolls.
Then the program throws a die as many times as the user defined.
Print the sum of the results in the console or in the HTML document.
*/

function main() {
    const howManyToRoll = parseInt(prompt("How many dice should be rolled?")!);

    let rolledSoFar = 0;

    const results: number[] = [];
    
    while (rolledSoFar < howManyToRoll) {
        const rollResult = Math.floor(Math.random() * 6) + 1;
        results.push(rollResult);
        rolledSoFar += 1;
    }

    let sum = 0;
    for (const result of results) {
        sum += result;
    }

    document.body.innerHTML = `The sum of the dice rolls is: ${sum}`;
}

main();