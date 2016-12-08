import { browser, element, by } from 'protractor';

export class RznAngularPage {
  navigateTo() {
    return browser.get('/home');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
