function concat(strings) {
    let result = "";

    for (const string of strings) {
        result += string;
    }

    return result;
}

const names = ["Johnny", "DeeDee", "Joey", "Marky"];

document.body.textContent = concat(names);
