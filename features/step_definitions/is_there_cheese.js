const { Given, When, Then } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

Given('I am on the Google search page', async function () {
  this.driver = new Builder().forBrowser('chrome').build();
  await this.driver.get('http://www.google.com');
});

When('I search for {string}', async function (string) {
  var element = await this.driver.findElement(By.name('q'));
  await element.sendKeys(string);
  await element.submit();
});

When('I wait for {string} seconds', async function (string) {
  await this.driver.sleep(Number(string) * 1000);
});

Then('the page title should start with {string}', async function (string) {
  await this.driver.getTitle().then(function (title) {
    assert(title.toLowerCase().lastIndexOf(string.toLowerCase(), 0) === 0);
  });

  this.driver.quit();
});
