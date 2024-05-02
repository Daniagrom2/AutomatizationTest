// grouped.test.js

// Підключаємо необхідні файли модулів
const arrayUtilsTests = require('./array_utils.tests');
const stringOperationsTests = require('./string_operations.test');

// Група тестів для файлу array_utils.js
describe('Тести для array_utils.js', () => {
    arrayUtilsTests(); // Запускаємо тести з файлу array_utils.tests.js
});

// Група тестів для файлу string_operations.test.js
describe('Тести для string_operations.test.js', () => {
    stringOperationsTests(); // Запускаємо тести з файлу string_operations.test.js
});
