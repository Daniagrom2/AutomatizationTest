// math_operations.js

// Функція для додавання двох чисел
function add(a, b) {
    return a + b;
}

// Функція для віднімання другого числа від першого
function subtract(a, b) {
    return a - b;
}

// Функція для множення двох чисел
function multiply(a, b) {
    return a * b;
}

// Функція для ділення першого числа на друге (уникнення ділення на 0)
function divide(a, b) {
    if (b === 0) {
        return "Помилка: ділення на нуль!";
    } else {
        return a / b;
    }
}

// Експортуємо функції, щоб їх можна було використовувати в інших файлах
module.exports = {
    add,
    subtract,
    multiply,
    divide
};