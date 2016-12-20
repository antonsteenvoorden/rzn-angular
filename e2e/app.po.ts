import {browser, element, by} from 'protractor';

export class TravelPlanner {
  navigateToLoginPage() {
    browser.get('/login');
  }

  navigateToHotels() {
    browser.get('/hotels');
  }

  navigateToBookings() {
    browser.get('/bookings');
  }

  navigateToProfile() {
    browser.get('/my-profile');
  }

  getProfilePageText() {
    return element(by.id('profile-title')).getText()
  }

  getLoginPageText() {
    return element(by.id('login-title')).getText();
  }

  getHotelsPageText() {
    return element(by.id('hotels-title')).getText();
  }

  login() {
    let email = element(by.id('email-input'));
    email.click();
    email.sendKeys('zaijacobs@gmail.com');

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

  register() {
// TODO: register a new user
  }

  hotelsCount() {
    return element.all(by.id('hotels')).count();
  }

  bookFirstHotel() {
    let hotel = element.all(by.id('hotels')).get(0);
    hotel.click();

    let bookButton1 = element(by.id('book-button'));
    bookButton1.click();

    let bookButton2 = element(by.id('book-button'));
    bookButton2.click();
  }

  addTravelerToBooking() {
    let hotel = element.all(by.id('hotels')).get(0);
    hotel.click();

    let bookButton1 = element(by.id('book-button'));
    bookButton1.click();

    // TODO: add traveler to booking
  }
}
