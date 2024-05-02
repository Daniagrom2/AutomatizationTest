// string_operations.js

// Функція для перевірки, чи є текст паліндромом
function isPalindrome(text) {
    // Прибираємо всі небуквенні символи і перетворюємо текст на нижній регістр
    const cleanedText = text.toLowerCase().replace(/[\W_]/g, '');
    // Перевертаємо текст
    const reversedText = cleanedText.split('').reverse().join('');
    // Порівнюємо очищений текст з його перевернутим варіантом
    return cleanedText === reversedText;
}

// Функція для перевірки, чи є два текстових фрагменти анаграмою один одного
function isAnagram(text1, text2) {
    // Прибираємо всі небуквенні символи і перетворюємо тексти на нижній регістр
    const cleanedText1 = text1.toLowerCase().replace(/[\W_]/g, '');
    const cleanedText2 = text2.toLowerCase().replace(/[\W_]/g, '');
    // Сортуємо букви в текстах
    const sortedText1 = cleanedText1.split('').sort().join('');
    const sortedText2 = cleanedText2.split('').sort().join('');
    // Порівнюємо відсортовані текстові фрагменти
    return sortedText1 === sortedText2;
}

// Експортуємо функції
module.exports = {
    isPalindrome,
    isAnagram
};
