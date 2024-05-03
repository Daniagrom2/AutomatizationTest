const asyncErrorFunction = require('./asyncErrorFunction'); // Підключаємо модуль, який ми хочемо протестувати

// Тест для асинхронної функції asyncErrorFunction
test('asyncErrorFunction відхиляється з очікуваною помилкою', async () => {
    try {
        // Спробуємо викликати функцію, що має відхилити проміс з помилкою
        await asyncErrorFunction();
    } catch (error) {
        console.log("Помилка спіймана: ", error.message);  // Виводимо помилку у консоль
    }

    // Перевіряємо, що функція відхиляється з очікуваною помилкою
    await expect(asyncErrorFunction()).rejects.toThrow("Це помилка");
});
