import {LoginPage} from "../profile-actions/login.po";
import {MyProfilePage} from "../profile-actions/my-profile.po";
import {BookingPage} from "./booking.po";
import {browser} from "protractor/built/index";

describe('Hotel Detail', function () {
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
    let url = browser.getCurrentUrl();
    expect(url.includes('bookings')).toEqual(true)
  });

  fit('Should go to bookings and validate first booking', () => {
    page.navigateTo();
    page.getBookingId().then(id => {
      console.log(id);
      expect(id[0].includes('10')).toEqual(true);
    })
  });
});
