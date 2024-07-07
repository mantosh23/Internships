// Button Color Change
const colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorButton.style.backgroundColor = randomColor;
});

// Greeting Alert
const greetButton = document.getElementById('greetButton');

greetButton.addEventListener('click', () => {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Good morning!';
    } else if (hours < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    alert(greeting);
});

// Basic Calculator
const calculateButton = document.getElementById('calculateButton');

calculateButton.addEventListener('click', () => {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(number1) || isNaN(number2)) {
        resultDiv.textContent = 'Please enter valid numbers.';
    } else {
        const result = number1 + number2;
        resultDiv.textContent = `Result: ${result}`;
    }
});
