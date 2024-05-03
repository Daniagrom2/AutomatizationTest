// asyncErrorFunction.js

// Асинхронна функція, яка відхиляється з помилкою
async function asyncErrorFunction() {
    // Відхиляємо проміс з помилкою "Це помилка"
    throw new Error("Це помилка");
}

// Експортуємо асинхронну функцію, щоб можна було її використовувати в інших файлах
module.exports = asyncErrorFunction;
