// // let currentInput = '';
// let display = document.getElementById('display');

// function appendToDisplay(value) {
//     currentInput += value;
//     display.innerText = currentInput;
// }

// function clearDisplay() {
//     currentInput = '';
//     display.innerText = '0';
// }

// function calculateResult() {
//     try {
//         currentInput = eval(currentInput);
//         display.innerText = currentInput;
//     } catch (error) {
//         display.innerText = 'Error';
//     }
// }

// // Add an event listener to execute the button actions
// document.addEventListener('DOMContentLoaded', function () {
//     const buttons = document.querySelectorAll('.buttons button');
//     buttons.forEach(button => {
//         button.addEventListener('click', function () {
//             const buttonText = this.textContent;
//             if (buttonText === '=') {
//                 calculateResult();
//             } else if (buttonText === 'C') {
//                 clearDisplay();
//             } else {
//                 appendToDisplay(buttonText);
//             }
//         });
//     });
// });
let currentInput = '';
let display = document.getElementById('display');

function appendToDisplay(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        display.innerText = currentInput;
    } catch (error) {
        display.innerText = 'Error';
    }
}

// Add an event listener to execute the button actions
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = this.textContent;
            if (buttonText === '=') {
                calculateResult();
            } else if (buttonText === 'C') {
                clearDisplay();
            } else {
                appendToDisplay(buttonText);
            }
        });
    });
});

