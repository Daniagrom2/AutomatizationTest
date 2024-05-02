// array_utils.tests.js

const arrayUtils = require('./array_utils');

let testArray;

beforeAll(() => {
    // Створення тестового масиву перед кожним тестом
    testArray = [1, 2, 3, 4, -5, -6, 7, -8, 9];
});

// Тести для функції sumArray()
test('Сума елементів масиву', () => {
    expect(arrayUtils.sumArray(testArray)).toBe(7);
});

// Тести для функції filterPositiveNumbers()
test('Фільтрація позитивних чисел', () => {
    expect(arrayUtils.filterPositiveNumbers(testArray)).toEqual([1, 2, 3, 4, 7, 9]);
});

// Тести для функції filterNegativeNumbers()
test('Фільтрація негативних чисел', () => {
    expect(arrayUtils.filterNegativeNumbers(testArray)).toEqual([-5, -6, -8]);
});

// Експортуємо функцію, щоб її можна було використовувати в інших файлах
module.exports = function arrayUtilsTests() {
    return;
};
