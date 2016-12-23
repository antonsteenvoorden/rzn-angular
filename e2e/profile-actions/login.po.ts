import {browser, element, by} from 'protractor';

export class LoginPage {
  navigateTo() {
    browser.get('/login');
  }

  getLoginPageText() {
    return element(by.id('login-title')).getText();
  }

  login() {
    let email = element(by.id('email-input'));
    email.click();
    email.sendKeys('antons@live.nl');

    let password = element(by.id('password-input'));
    password.click();
    password.sendKeys('123QWE,./');

    let loginButton = element(by.id('login-button'));
    loginButton.click();
    browser.sleep(2000);
  }

  logoutFromProfile() {
    let logoutButton = element(by.id('logout-button'));
    logoutButton.click();
    browser.sleep(2000);
  }

}
