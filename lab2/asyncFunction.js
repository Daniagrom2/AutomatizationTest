// asyncFunction.js

// Асинхронна функція, яка викликає іншу асинхронну функцію та очікує її результат
async function asyncFunction() {
    // Викликаємо іншу асинхронну функцію та очікуємо її результат
    const result = await asyncSubFunction();
    // Повертаємо результат вирішеної обіцянки
    return result;
}

// Інша асинхронна функція, яка повертає обіцянку, що вирішується числом
async function asyncSubFunction() {
    // Чекаємо 1 секунду перед поверненням значення
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Повертаємо обіцянку, яка вирішується числом
    return 42;
}

// Експортуємо асинхронну функцію, щоб можна було її використовувати в інших файлах
module.exports = asyncFunction;
