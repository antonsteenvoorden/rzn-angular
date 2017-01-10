import {LoginPage} from "../profile-actions/login.po";
import {MyProfilePage} from "../profile-actions/my-profile.po";
import {HotelDetailPage} from "../hotel-actions/hotel-detail.po";

describe('Hotel Detail', function () {
  let page:HotelDetailPage;
  let loginPage:LoginPage;
  let myProfilePage:MyProfilePage;
  
  beforeEach(() => {
    loginPage = new LoginPage();
    loginPage.navigateTo();
    loginPage.login();
    page = new HotelDetailPage();
  });

  afterEach(() => {
    myProfilePage = new MyProfilePage();
    myProfilePage.navigateTo();
    myProfilePage.logoutFromProfile();
  });


  it('Should set the weather after API response.', () => {
    page.navigateTo();
    page.getWeatherDescription().then(text => {
      expect(text[0].includes('onbewolkt')).toEqual(true);
    });
    page.getWeatherHumidity().then(text => {
      expect(text[0].includes('31')).toEqual(true);
    });
    page.getWeatherTemperature().then(text => {
      expect(text[0].includes('33.41')).toEqual(true);
    });
    page.getWeatherWindspeed().then(text => {
      expect(text[0].includes('1.98')).toEqual(true);
    });
  });
});
