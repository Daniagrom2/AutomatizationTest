const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Шлях до chromedriver
const chromeDriverPath = 'C:\\Users\\Danyil\\Desktop\\Automatization\\lab3\\node_modules\\webdriver-manager\\selenium\\chromedriver_114.0.5735.90.exe';

// Налаштування опцій ChromeDriver
let options = new chrome.Options();

// Задав властивість webdriver.chrome.driver до шляху вашого chromedriver тут можна багато цікавого прописати
process.env['webdriver.chrome.driver'] = chromeDriverPath;

async function runTest() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        // Крок 1а: Перехід на головну сторінку
        await driver.get('https://automationexercise.com/');

        // Крок 1b: Натиснути на "Sign in"
        await driver.findElement(By.css('a[href="/login"]')).click();

        // Крок 1c: Перевірка title сторінки
        await driver.wait(until.titleIs('Automation Exercise - Signup / Login'), 5000);

        // Крок 1d: Введення логіну і пароля
        await driver.findElement(By.name('email')).sendKeys('daniagrom@gmail.com');
        await driver.findElement(By.name('password')).sendKeys('123456', Key.RETURN);

        // Крок 1e: Перевірка title сторінки після входу
        await driver.wait(until.titleIs('Automation Exercise'), 5000);

        // Крок 1f: Перевірка імені та прізвища користувача
        let userName = await driver.findElement(By.css('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a > b')).getText();
        console.log("Юзер :", userName);
        if (!userName.includes('Andrii')) {
            throw new Error("Ім'я користувача не відповідає очікуваному.");
        }

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
		console.log('Все добре тут вихід.');
		//await driver.quit();
    }
}

runTest();