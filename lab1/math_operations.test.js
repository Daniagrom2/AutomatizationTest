// math_operations.test.js

const mathOperations = require('./math_operations');

// Тести для функції add()
test('Додавання двох позитивних чисел', () => {
    expect(mathOperations.add(3, 5)).toBe(8);
});

test('Додавання від’ємного та позитивного чисел', () => {
    expect(mathOperations.add(-3, 5)).toBe(2);
});

// Тести для функції subtract()
test('Віднімання позитивних чисел', () => {
    expect(mathOperations.subtract(10, 7)).toBe(3);
});

test('Віднімання від’ємного від позитивного числа', () => {
    expect(mathOperations.subtract(10, -3)).toBe(13);
});

// Тести для функції multiply()
test('Множення двох позитивних чисел', () => {
    expect(mathOperations.multiply(4, 3)).toBe(12);
});

test('Множення від’ємного та позитивного чисел', () => {
    expect(mathOperations.multiply(-4, 3)).toBe(-12);
});

// Тести для функції divide()
test('Ділення позитивних чисел', () => {
    expect(mathOperations.divide(15, 3)).toBe(5);
});

test('Ділення на нуль', () => {
    expect(mathOperations.divide(10, 0)).toBe("Помилка: ділення на нуль!");
});
