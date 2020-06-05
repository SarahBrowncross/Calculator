function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2);
    } else if (operator == '/') {
        return divide(num1, num2);
    }
    throw new Error("invalid operator");
}

const display = document.querySelector("#display");

document.querySelector("#clear")
    .addEventListener("click", () => {
        display.textContent = "";
    });

document.querySelectorAll(".number")
    .forEach(button => button.addEventListener('click', () => display.textContent += button.textContent));

document.querySelectorAll(".operator")
    .forEach(button => button.addEventListener('click', () => display.textContent += " " + button.textContent + " "));

document.querySelector(".equals")
    .addEventListener("click", function () {
        const values = display.textContent.split(" ");
        while (values.length > 1) {
            let mult = values.indexOf("*");
            while (mult !== -1) {
                const num1 = Number(values[mult-1]);
                const num2 = Number(values[mult+1]);
                const answer = operate("*", num1, num2);
                values.splice(mult-1, 3, answer);
                mult = values.indexOf("*");
            }
            let div = values.indexOf("/");
            while (div !== -1) {
                const num1 = Number(values[div-1]);
                const num2 = Number(values[div+1]);
                const answer = operate("/", num1, num2);
                values.splice(div-1, 3, answer);
                div = values.indexOf("/");
            }
            let plus = values.indexOf("+");
            while (plus !== -1) {
                const num1 = Number(values[plus-1]);
                const num2 = Number(values[plus+1]);
                const answer = operate("+", num1, num2);
                values.splice(plus-1, 3, answer);
                plus = values.indexOf("+");
            }
            let min = values.indexOf("-");
            while (min !== -1) {
                const num1 = Number(values[min-1]);
                const num2 = Number(values[min+1]);
                const answer = operate("-", num1, num2);
                values.splice(min-1, 3, answer);
                min = values.indexOf("-");
            }
        }
        display.textContent = Math.round(values[0] * 100) / 100;
    });

