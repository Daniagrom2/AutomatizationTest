const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Встановлення шляху до chromedriver за допомогою ServiceBuilder
const chromeDriverPath = 'C:\\Users\\Danyil\\Desktop\\Automatization\\lab6\\node_modules\\webdriver-manager\\selenium\\chromedriver.exe';

const serviceBuilder = new chrome.ServiceBuilder(chromeDriverPath);

const options = new chrome.Options();

describe('Перевірка стартової сторінки Google', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .setChromeService(serviceBuilder)
            .build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Перевірка наявності логотипу Google', async () => {
        await driver.get('https://www.google.com');
        let logoPresent = await driver.findElement(By.className('lnXdpd')).isDisplayed();
        console.log('Тест 1 - Наявність логотипу Google: ' + logoPresent);
    });

    test('Перевірка доступності поля пошуку', async () => {
        let searchFieldEnabled = await driver.findElement(By.name('q')).isEnabled();
        console.log('Тест 2 - Поле пошуку доступне: ' + searchFieldEnabled);
    });

    test('Перевірка наявності кнопки "Google Search"', async () => {
        let googleSearchButtonVisible = await driver.findElement(By.name('btnK')).isDisplayed();
        console.log('Тест 3 - Кнопка "Google Search" наявна: ' + googleSearchButtonVisible);
    });

    test('Негативний тест - Кнопка "I\'m Feeling Lucky" має бути відсутня', async () => {
        let feelingLuckyButtonVisible = await driver.findElement(By.name('btnI')).isDisplayed();
        console.log('Негативний Тест 4 - Кнопка "I\'m Feeling Lucky" відсутня: ' + !feelingLuckyButtonVisible);
    });

    test('Негативний тест - Результат пошуку некоректного запиту', async () => {
        await driver.findElement(By.name('q')).sendKeys('@@@@@@@@@@@@@@@@@', Key.RETURN);
        let title = await driver.getTitle();
        console.log('Негативний Тест 5 - Результат пошуку некоректного запиту: ' + (title === '@@@@@@@@@@@@@@@@@ - Пошук Google'));
    });

    test('Перевірка функціональності пошуку за словом "Hello World"', async () => {
        await driver.findElement(By.name('q')).clear();
        await driver.findElement(By.name('q')).sendKeys('Hello World', Key.RETURN);
        let resultsPresent = await driver.wait(until.elementLocated(By.id('search')), 5000).isDisplayed();
        console.log('Тест 6 - Функціональність пошуку: ' + resultsPresent);
    });
});
