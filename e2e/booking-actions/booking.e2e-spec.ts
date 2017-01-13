import {LoginPage} from "../profile-actions/login.po";
import {MyProfilePage} from "../profile-actions/my-profile.po";
import {BookingPage} from "./booking.po";
import {browser} from "protractor/built/index";

describe('Bookingpage', function () {
  let page:BookingPage;
  let loginPage:LoginPage;
  let myProfilePage:MyProfilePage;

  beforeEach(() => {
    loginPage = new LoginPage();
    loginPage.navigateTo();
    loginPage.login();
    page = new BookingPage();
  });

  afterEach(() => {
    myProfilePage = new MyProfilePage();
    myProfilePage.navigateTo();
    myProfilePage.logoutFromProfile();
  });


  it('Should go to bookings', () => {
    page.navigateTo();
    browser.getCurrentUrl()
      .then(url => {
        expect(url.indexOf('bookings')).toBeGreaterThanOrEqual(0)
      });
  });

  it('Should go to bookings and validate first booking', () => {
    page.navigateTo();

    page.getBookingId().then(id => {
      expect(id.indexOf('1')).toBeGreaterThanOrEqual(0, 'booking id');
    });
    page.getBookingCity().then(id => {
      expect(id.indexOf('Lisse')).toBeGreaterThanOrEqual(0, 'booking city');
    });
    page.getBookingNumberOfTravellers().then(id => {
      expect(id.indexOf('3')).toBeGreaterThanOrEqual(0, 'number of travelers');
    });
    page.getBookingPrice().then(id => {
      expect(id.indexOf('320')).toBeGreaterThanOrEqual(0, 'price');
    });
    page.getBookingCheckout().then(id => {
      expect(id.indexOf('10-01-2017')).toBeGreaterThanOrEqual(0, 'checkout');
    });
    page.getBookingCheckin().then(id => {
      expect(id.indexOf('01-01-2017')).toBeGreaterThanOrEqual(0, 'checkin');
    });

  });
});
