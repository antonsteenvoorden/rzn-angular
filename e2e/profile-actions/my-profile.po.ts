import {browser, element, by} from 'protractor';

export class MyProfilePage {
  navigateTo() {
    browser.get('/my-profile');
  }

  getProfilePageText() {
    return element(by.id('profile-title')).getText()
  }

  logoutFromProfile() {
    let logoutButton = element(by.id('logout-button'));
    logoutButton.click();
  }

  getEmail(){
    return element(by.id('profile-email')).getText()

  }

  getFirstName(){
    return element(by.id('profile-firstName')).getText()

  }
  getLastName(){
    return element(by.id('profile-lastName')).getText()

  }
  getPostalCode(){
    return element(by.id('profile-postalCode')).getText()

  }
  getAddress(){
    return element(by.id('profile-address')).getText()

  }
  getCity(){
    return element(by.id('profile-city')).getText()

  }
  getPhoneNumber(){
    return element(by.id('profile-phoneNumber')).getText()

  }


}
