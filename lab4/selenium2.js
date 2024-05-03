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
		await driver.sleep(30000);
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
	// Перехід у розділ
        await driver.findElement(By.css('a[href="/products"]')).click();
		await driver.sleep(3000);
		await driver.findElement(By.css('a[href="/product_details/2"]')).click();
		// Додавання товару в корзину
		await driver.wait(until.elementLocated(By.className('btn btn-default cart')), 10000).click();
        await driver.wait(until.elementLocated(By.css('.modal-content')), 5000); // чекаємо поки з'явиться модальне вікно корзини
		await driver.sleep(1500);
        await driver.findElement(By.css('.modal-content a[href="/view_cart"]')).click(); // Переходимо в корзину

        // Перевірка товару в корзині
		await driver.wait(until.elementLocated(By.className('btn btn-default check_out')), 5000); 
        let productName = await driver.findElement(By.css('.cart_description a')).getText();
        let productPrice = await driver.findElement(By.css('.cart_total_price')).getText();
        console.log("Product in cart:", productName);
        console.log("Price of product:", productPrice);

        if (productName.includes("Men Tshirt") && productPrice.trim() === "Rs. 400") {
            console.log("Test Passed: Product name and price are correct.");
        } else {
            console.log("Test Failed: Incorrect product name or price.");
        }

        // Змінення кількості товару
		await driver.get('https://automationexercise.com/product_details/2');
		await driver.wait(until.elementLocated(By.className('btn btn-default cart')), 10000).click();
		await driver.wait(until.elementLocated(By.css('.modal-content')), 5000); // чекаємо поки з'явиться модальне вікно корзини
		await driver.sleep(1500);
        await driver.findElement(By.css('.modal-content a[href="/view_cart"]')).click();
		await driver.sleep(1500);
		await driver.wait(until.elementLocated(By.className('btn btn-default check_out')), 5000); 
        let total = await driver.findElement(By.css('.cart_total_price')).getText();
        console.log("Total for 2 items:", total);

        if (total.trim() === "Rs. 800") {
            console.log("Test Passed: Total price is correct for 2 items.");
        } else {
            console.log("Test Failed: Total price is incorrect.");
        }
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
		console.log('Все добре тут вихід.');
		//await driver.quit();
    }
}

runTest();