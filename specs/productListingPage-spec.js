const ProductListingPage = require('../page_objects/ProductListingPage');
const HomePage = require('../page_objects/HomePage');

browser.waitForAngularEnabled(false);
const EC = protractor.ExpectedConditions;
const productListingPage = new ProductListingPage();
const homePage = new HomePage();

beforeAll(async () => {
  browser.get(homePage.path);
  browser.wait(EC.presenceOf(homePage.loginPanel), 5000);
  homePage.fillLoginForm();
  browser.wait(EC.presenceOf(productListingPage.productList), 5000);
});

describe('PLP sort by', () => {
  it('sort products from Z to A', () => {
    productListingPage.sortByNameAtoZ();
  });
  it('sort products by price: high to low', () => {
    productListingPage.sortByPriceHiLo();
  });
  it('sort products by price: low to high', () => {
    productListingPage.sortByPriceLoHi();
  });
});
