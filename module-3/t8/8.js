const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const resultElement = document.getElementById('result');
const startButton = document.getElementById('start');

startButton.addEventListener('click', () => {
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    
    let result;

    switch (operationSelect.value) {
        case 'add':
            result = num1 + num2;
    
            break;
        case 'sub':
            result = num1 - num2;
    
            break;
        case 'multi':
            result = num1 * num2;
    
            break;
        case 'div':
            result = num1 / num2;
    
            break;
    }

    resultElement.textContent = result;
});
