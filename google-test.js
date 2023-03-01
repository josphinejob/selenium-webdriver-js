const webdriver = require('selenium-webdriver');

const By = webdriver.By;

// Get browser name - firefox, chrome or safari - from commandline
const browserName = process.argv[2];
const driver = new webdriver.Builder()
  .forBrowser(browserName)
  .build()

  openGoogle()
  typeSearchKeyword()
  verifyGmailLink()
  verifyImagesLink()


async function openGoogle() {
  await driver.get('http://www.google.com')
  // OR await driver.navigate().to('http://www.google.com');
  await driver.sleep(2000)
}

async function typeSearchKeyword() {
  await driver.sleep(1000)
  await driver.findElement(By.css('input[role="combobox"]')).sendKeys('webdriver')
  await driver.sleep(3000)
}

async function verifyGmailLink() {
  await driver.findElement(By.linkText('Gmail')).isDisplayed()
}

async function verifyImagesLink() {
  await driver.findElement(By.linkText('Images')).isDisplayed()
  await driver.close()
}















