function getRoll(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

const sides = parseInt(prompt("How many sides should the die have"), 10);

const list = document.createElement("ul");
document.body.appendChild(list);

let result;

do {
    result = getRoll(sides);

    const item = document.createElement("li");
    item.textContent = result;
    list.appendChild(item);
} while (result !== sides);
