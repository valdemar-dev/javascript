const calculationInput = document.getElementById('calculation');
const startButton = document.getElementById('start');
const resultElement = document.getElementById('result');

startButton.addEventListener('click', () => {
    const calculation = calculationInput.value.replace(/\s/g, '');
    let operator;

    if (calculation.includes('+')) {
        operator = '+';
    } else if (calculation.includes('-')) {
        operator = '-';
    } else if (calculation.includes('*')) {
        operator = '*';
    } else if (calculation.includes('/')) {
        operator = '/';
    }

    if (!operator) {
        resultElement.textContent = 'Invalid calculation';

        return;
    }

    const [left, right] = calculation.split(operator).map(Number);
    let result;

    switch (operator) {
        case '+':
            result = left + right;
            break;
        case '-':
            result = left - right;
            break;
        case '*':
            result = left * right;
            break;
        case '/':
            result = left / right;
            break;
    }

    resultElement.textContent = result;
});
