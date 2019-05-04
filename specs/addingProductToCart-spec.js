const ProductListingPage = require('../page_objects/ProductListingPage');
const HomePage = require('../page_objects/HomePage');

browser.waitForAngularEnabled(false);
const EC = protractor.ExpectedConditions;
const homePage = new HomePage();
const productListingPage = new ProductListingPage();

beforeAll(async () => {
  browser.get(homePage.path);
  browser.wait(EC.presenceOf(homePage.loginPanel), 5000);
  homePage.fillLoginForm();
  browser.wait(EC.presenceOf(productListingPage.productList), 5000);
});
describe('Adding Product to Cart', () => {
  it('Add product to Cart', () => {
    productListingPage.addToCartButton.click();
    productListingPage.cartButton.click();
    browser.wait(EC.presenceOf(productListingPage.cartList), 5000);
    productListingPage.checkoutButton.click();
    productListingPage.fillCheckoutInformationForm();
    browser.wait(EC.presenceOf(productListingPage.summaryInfo), 5000);
    productListingPage.finishOrderButton.click();
    expect(productListingPage.completeOrderContainer.isPresent()).toBeTruthy();
  });
});
