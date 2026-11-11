/*
Write a function that returns a random dice roll between 1 and 6.
The function should not have any parameters. 
Write a main program that rolls the dice until the result is 6. 
The main program should print out the result of each roll in an unordered list (<ul>). (2p)
*/

function getRoll(): number {
    return Math.floor(Math.random() * 6 + 1);
}

const ul = document.createElement("ul");
document.body.appendChild(ul);

function main() {
    let result: number;

    do {
        result = getRoll();

        const li = document.createElement("li");
        li.innerText = result.toString();

        ul.appendChild(li);
    } while (result !== 6);
}

main();