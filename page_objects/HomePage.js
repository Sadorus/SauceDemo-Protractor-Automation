module.exports = class HomePage {
  constructor() {
    this.path = 'https://www.saucedemo.com/index.html';
    this.loginPanel = element(by.id('login_button_container'));
    this.loginForm = {
      fields: {
        usernameInput: element(by.id('user-name')),
        passwordInput: element(by.id('password')),
        logInButton: element(by.css('input.btn_action')),
      },
    };
  }

  async fillLoginForm() {
    this.loginForm.fields.usernameInput.sendKeys('standard_user');
    this.loginForm.fields.passwordInput.sendKeys('secret_sauce');
    this.loginForm.fields.logInButton.click();
  }
};
