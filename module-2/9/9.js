function even(numbers) {
    const result = [];

    for (const number of numbers) {
        if (number % 2 === 0) {
            result.push(number);
        }
    }

    return result;
}

const original = [1, 2, 3, 4, 5, 6, 8, 9, 10];

console.log("Original array:", original);
console.log("Even numbers:", even(original));
