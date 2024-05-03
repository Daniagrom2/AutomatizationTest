// fetchData.js
const simulateAPI = require('./apiCall');

async function fetchData() {
    try {
        console.log("fetchData: Calling simulateAPI...");
        const data = await simulateAPI();
        console.log("fetchData: Data received", data);
        return data;
    } catch (error) {
        console.error("fetchData: Failed to fetch data", error);
        throw new Error('Failed to fetch data');
    }
}

module.exports = fetchData;
