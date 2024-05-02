// string_operations.test.js

const stringOperations = require('./string_operations');

// Тести для функції isPalindrome()
test('Перевірка, що "level" - паліндром', () => {
    expect(stringOperations.isPalindrome('level')).toBe(true);
});

test('Перевірка, що "hello" - не паліндром', () => {
    expect(stringOperations.isPalindrome('hello')).toBe(false);
});

test('Перевірка, що "A man a plan a canal Panama" - паліндром', () => {
    expect(stringOperations.isPalindrome('A man a plan a canal Panama')).toBe(true);
});

// Тести для функції isAnagram()
test('Перевірка, що "listen" та "silent" - анаграми', () => {
    expect(stringOperations.isAnagram('listen', 'silent')).toBe(true);
});

test('Перевірка, що "hello" та "world" - не анаграми', () => {
    expect(stringOperations.isAnagram('hello', 'world')).toBe(false);
});

// Експортуємо функцію, щоб можна було використовувати її в інших файлах
module.exports = function stringOperationsTests() {
    return;
};