// fetchAPI.test.js
const fetchAPI = require('./fetchAPI');
require('jest-fetch-mock').enableMocks();


test('fetchAPI returns expected JSON object', async () => {
    const mockData = { name: 'John', age: 30 };
    fetch.mockResponseOnce(JSON.stringify(mockData));

    const url = 'https://api.example.com/data';
    const data = await fetchAPI(url);

    expect(data).toEqual(mockData);
});
