// array_utils.js

// Функція для обчислення суми елементів масиву
function sumArray(array) {
    return array.reduce((total, currentValue) => total + currentValue, 0);
}

// Функція для фільтрації позитивних чисел у масиві
function filterPositiveNumbers(array) {
    return array.filter(number => number > 0);
}

// Функція для фільтрації негативних чисел у масиві
function filterNegativeNumbers(array) {
    return array.filter(number => number < 0);
}

// Експортуємо функції, щоб їх можна було використовувати в інших файлах
module.exports = {
    sumArray,
    filterPositiveNumbers,
    filterNegativeNumbers
};
