/*
Modify the function above so that it gets the number of sides on the dice as a parameter. 
With the modified function you can for example roll a 21-sided role-playing dice. 
The difference to the last exercise is that the dice rolling in the main program continues 
until the program gets the maximum number on the dice, which is asked from the user at the beginning. (2p)
*/

function getRoll(sides: number): number {
    return Math.floor(Math.random() * sides + 1);
}

const ul = document.createElement("ul");
document.body.appendChild(ul);

const sides = parseInt(prompt("How many sides should the die have")!);

function main() {
    let result: number;

    do {
        result = getRoll(sides);

        const li = document.createElement("li");
        li.innerText = result.toString();

        ul.appendChild(li);
    } while (result !== sides);
}

main();