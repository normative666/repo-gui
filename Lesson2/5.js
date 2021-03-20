'use strict'

function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}
function division(a, b) {
    return a / b;
}
function multiplication(a, b) {
    return a * b;
}
/**
 * 
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation  может быть + - / *
 * @throws {Error} Ошибка
 * @returns {number} 
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        default:
            throw new Error("Операция" + operation " не предусмотренна")
    }
}
