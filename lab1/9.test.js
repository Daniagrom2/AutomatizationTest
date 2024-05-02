function arrayContainsObject(array, obj) {
    return array.some(item => JSON.stringify(item) === JSON.stringify(obj));
}

function stringContainsWord(text, word) {
    return text.split(' ').includes(word);
}

function objectReturnedByFunctionContainsField(func, field) {
    const obj = func();
    return obj.hasOwnProperty(field);
}

function arrayCallback(array, callback) {
    array.forEach(callback);
}

function phraseToWords(phrase, callback) {
    const words = phrase.split(' ');
    callback(words);
}

const person = {
    firstName: 'Danyil',
    lastName: 'Kolodii',
    introduce() {
        console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
    }
};

test('Масив містить вказаний об’єкт', () => {
    const array = [{ id: 1, name: 'Danyil' }, { id: 2, name: 'Jane' }];
    const obj = { id: 1, name: 'Danyil' };
    expect(arrayContainsObject(array, obj)).toBe(true);
});

test('Текст містить вказане слово', () => {
    const text = 'Hello world';
    const word = 'world';
    expect(stringContainsWord(text, word)).toBe(true);
});

test('Об’єкт, який повертається функцією, містить вказане поле', () => {
    const func = () => ({ id: 1, name: 'Danyil' });
    const field = 'name';
    expect(objectReturnedByFunctionContainsField(func, field)).toBe(true);
});

test('Кількість викликів зворотнього виклику', () => {
    const array = [1, 2, 3, 4, 5];
    const callback = jest.fn();
    arrayCallback(array, callback);
    expect(callback).toHaveBeenCalledTimes(array.length);
});

test('Зворотній виклик виконується з масивом слів', () => {
    const phrase = 'Hello world';
    const callback = jest.fn();
    phraseToWords(phrase, callback);
    expect(callback).toHaveBeenCalledWith(['Hello', 'world']);
});

test('Метод introduce викликається один раз', () => {
    const introduceSpy = jest.spyOn(person, 'introduce');
    person.introduce();
    expect(introduceSpy).toHaveBeenCalledTimes(1);
});
