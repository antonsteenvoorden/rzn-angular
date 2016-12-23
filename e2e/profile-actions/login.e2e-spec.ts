import {TravelPlanner} from './app.po';

describe('TravelPlanner', function () {
  let page: TravelPlanner;

  beforeEach(() => {
    page = new TravelPlanner();
    page.navigateToLoginPage();
    expect(page.getLoginPageText()).toEqual('Login');
    page.login();
  });

  afterEach(() => {
    page.navigateToProfile();
    page.logoutFromProfile();
  });

  it('should display user name', () => {
    expect(page.getProfilePageText()).toEqual('Hello, Zairon Jacobs');
  });

  it('should view hotels page', () => {
    page.navigateToHotels();
    page.getHotelsPageText();
    expect(page.getHotelsPageText()).toEqual('Hotels');
  });

  it('should return the right amount of hotels', () => {
    page.navigateToHotels();
    expect(page.hotelsCount()).toEqual(7);
  });

  it('should book the first hotel in hotels', () => {
    page.navigateToHotels();
    page.bookFirstHotel();
  });

  it('should add an extra traveler and then finish the booking', () => {
    page.navigateToHotels();
  });
});
