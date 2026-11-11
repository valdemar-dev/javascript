function getRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

const list = document.createElement("ul");
document.body.appendChild(list);

let result;

do {
    result = getRoll();

    const item = document.createElement("li");
    item.textContent = result;
    list.appendChild(item);
} while (result !== 6);
