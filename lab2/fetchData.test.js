// fetchData.test.js
const fetchData = require('./fetchData');

test('fetchData returns expected JSON object', async () => {
    console.log("Test: Testing fetchData function...");
    const expectedData = { name: 'John', age: 30 };
    const data = await fetchData();
    expect(data).toEqual(expectedData);
    console.log("Test: Expected data has been matched.");
});
