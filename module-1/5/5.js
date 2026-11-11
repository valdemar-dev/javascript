const year = parseInt(prompt("Enter a year: "), 10);

const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

document.body.textContent =
    `Entered year: ${year} is ${isLeapYear ? "" : "NOT "}a leap year.`;
