// apiCall.js
function simulateAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("simulateAPI: Data is being prepared...");
            resolve({ name: 'John', age: 30 });
        }, 100);  // Симулюємо затримку мережі
    });
}

module.exports = simulateAPI;
