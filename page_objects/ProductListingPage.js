/* eslint-disable no-shadow */
const EC = protractor.ExpectedConditions;

module.exports = class ProdutctListingPage {
  constructor() {
    this.completeOrderContainer = element(by.css('.checkout_complete_container'));
    this.finishOrderButton = element(by.linkText('FINISH'));
    this.summaryInfo = element(by.css('.summary_info'));
    this.checkoutInformationForm = {
      fields: {
        firstNameInput: element(by.id('first-name')),
        lastNameInput: element(by.id('last-name')),
        postalCodeInput: element(by.id('postal-code')),
        continueButton: element(by.css('.btn_primary.cart_button')),
      },
    };
    this.checkoutButton = element(by.css('a.btn_action.checkout_button'));
    this.cartList = element(by.css('.cart_list'));
    this.cartButton = element(by.id('shopping_cart_container'));
    this.addToCartButton = element.all(by.css('button.btn_primary')).get(0);
    this.sortByContainer = element(by.css('.product_sort_container'));
    this.sortByNameAtoZOption = element(by.css('.product_sort_container [value="za"]'));
    this.sortByPriceHiLoOption = element(by.css('.product_sort_container [value="hilo"]'));
    this.sortByPriceLoHiOption = element(by.css('.product_sort_container [value="lohi"]'));
    this.productNames = element(by.css('#inventory_container.inventory_container'))
      .all(by.css('.inventory_item_name'));
    this.productPrices = element(by.css('#inventory_container.inventory_container'))
      .all(by.css('.inventory_item_price'));
    this.productList = element(by.css('.inventory_list'));
  }

  async fillCheckoutInformationForm() {
    this.checkoutInformationForm.fields.firstNameInput.sendKeys('Mateusz');
    this.checkoutInformationForm.fields.lastNameInput.sendKeys('Błoch');
    this.checkoutInformationForm.fields.postalCodeInput.sendKeys('85-590');
    this.checkoutInformationForm.fields.continueButton.click();
  }

  async sortByNameAtoZ() {
    this.productNames.map(eachName => eachName.getText()
      .then(unSortedProductNames => unSortedProductNames)).then((unSortedProductNames) => {
      this.sortByContainer.click();
      this.sortByNameAtoZOption.click();
      browser.wait(EC.presenceOf(this.productList), 5000);
      let sortedProductNames = unSortedProductNames.slice();
      sortedProductNames = sortedProductNames.reverse();
      this.productNames.map(eachName => eachName.getText()
        .then(sortedProductNamesCheck => sortedProductNamesCheck)).then((sortedProductNamesCheck) => {
        expect(sortedProductNames).toEqual(sortedProductNamesCheck);
      });
    });
  }

  async sortByPriceHiLo() {
    this.productPrices.map(eachPrice => eachPrice.getText()
      .then(eachPrice => eachPrice.slice(1))
      .then(unSortedProductPrices => unSortedProductPrices)).then((unSortedProductPrices) => {
      this.sortByContainer.click();
      this.sortByPriceHiLoOption.click();
      browser.wait(EC.presenceOf(this.productList), 5000);
      let sortedProductPrices = unSortedProductPrices.slice();
      sortedProductPrices = sortedProductPrices.sort((a, b) => b - a);
      this.productPrices.map(eachPrice => eachPrice.getText()
        .then(eachPrice => eachPrice.slice(1))
        .then(sortedProductPricesCheck => sortedProductPricesCheck)).then((sortedProductPricesCheck) => {
        expect(sortedProductPrices).toEqual(sortedProductPricesCheck);
      });
    });
  }

  async sortByPriceLoHi() {
    this.productPrices.map(eachPrice => eachPrice.getText()
      .then(eachPrice => eachPrice.slice(1))
      .then(unSortedProductPrices => unSortedProductPrices)).then((unSortedProductPrices) => {
      this.sortByContainer.click();
      this.sortByPriceLoHiOption.click();
      browser.wait(EC.presenceOf(this.productList), 5000);
      let sortedProductPrices = unSortedProductPrices.slice();
      sortedProductPrices = sortedProductPrices.sort((a, b) => a - b);
      this.productPrices.map(eachPrice => eachPrice.getText()
        .then(eachPrice => eachPrice.slice(1))
        .then(sortedProductPricesCheck => sortedProductPricesCheck)).then((sortedProductPricesCheck) => {
        expect(sortedProductPrices).toEqual(sortedProductPricesCheck);
      });
    });
  }
};
