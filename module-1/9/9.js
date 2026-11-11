function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

const number = parseInt(prompt("Please provide a number"), 10);

document.body.textContent = isPrime(number)
    ? `The number ${number} is a prime.`
    : `The number ${number} is not a prime.`;
