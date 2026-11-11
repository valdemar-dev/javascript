const shouldCalculate = confirm("Should I calculate the square root?");

if (!shouldCalculate) {
    document.body.textContent = "The square root is not calculated.";
} else {
    const number = parseInt(
        prompt("Please enter the number to calculate the square root for."),
        10
    );

    if (number < 0) {
        document.body.textContent =
            "The square root of a negative number is not defined.";
    } else {
        document.body.textContent =
            `The square root of ${number} is ${Math.sqrt(number)}`;
    }
}
