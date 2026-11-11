const numbers = [];

for (let i = 0; i < 5; i++) {
    numbers.push(parseInt(prompt("Enter a number"), 10));
}

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}
