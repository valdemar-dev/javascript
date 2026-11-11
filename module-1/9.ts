/*
Write a program that asks the user for an integer and tells if the number is a prime number. (2p)
Prime numbers are numbers that are only divisible by 1 and itself.
For example, number 13 is a prime number as it can only be divided by 1 or 13 so that the result is an integer.
On the other hand, number 21 for example is not a prime number as it can be also be divided by numbers 3 and 7.
Print the result on the HTML document.
*/

function isPrime(num: number): boolean {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
            return false;
        } 
    }
    
    return num > 1;
}

function main() {
    const number = parseInt(prompt("Please provide a number")!);

    if (isPrime(number)) {
        document.body.innerHTML = `The number ${number} is a prime.`;
    } else {
        document.body.innerHTML = `The number ${number} is not a prime.`;
    }
    
}

main();