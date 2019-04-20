module.exports = class HomePage {
  constructor() {
    this.path = 'https://www.saucedemo.com/index.html';
    this.loginPanel = element(by.id('login_button_container'));
    this.standardUsername = 'standard_user';
    this.password = 'secret_sauce ';
    this.usernameInput = element(by.id('user-name'));
    this.passwordInput = element(by.id('password'));
    this.logInButton = element(by.css('input.btn_action'));
  }
};
