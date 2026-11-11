function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const startYear = parseInt(prompt("Enter the start year"), 10);
const endYear = parseInt(prompt("Enter the end year"), 10);

const list = document.createElement("ul");

for (let year = startYear; year <= endYear; year++) {
    if (!isLeapYear(year)) {
        continue;
    }

    const item = document.createElement("li");
    item.textContent = year;
    list.appendChild(item);
}

document.body.appendChild(list);
