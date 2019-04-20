// import HomePage from '../page_objects/HomePage';
const HomePage = require('../page_objects/HomePage');

browser.waitForAngularEnabled(false);
const EC = protractor.ExpectedConditions;
const homePage = new HomePage();

beforeEach(async () => {
  browser.get(homePage.path);
  browser.wait(EC.presenceOf(homePage.loginPanel), 5000);
});

describe('Homepage', () => {
  it('Log into your account', () => {
    homePage.usernameInput.sendKeys(homePage.standardUsername);
    homePage.passwordInput.sendKeys(homePage.password);
    homePage.logInButton.click();
    // ...?
  });
});
