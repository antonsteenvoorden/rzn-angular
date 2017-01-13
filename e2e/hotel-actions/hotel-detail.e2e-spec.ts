import {LoginPage} from "../profile-actions/login.po";
import {MyProfilePage} from "../profile-actions/my-profile.po";
import {HotelDetailPage} from "./hotel-detail.po";

describe('Hotel Detail', function () {
  let page:HotelDetailPage;
  let loginPage:LoginPage;
  let myProfilePage:MyProfilePage;

  const testData = {
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "onbewolkt",
        "icon": "02d"
      }
    ],
    "main": {
      "temp": 306.41,
      "pressure": 989.5,
      "humidity": 31,
      "temp_min": 306.41,
      "temp_max": 306.41,
      "sea_level": 1022.47,
      "grnd_level": 989.5
    },
    "wind": {
      "speed": 1.98,
      "deg": 98.5001
    }
  };

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
      expect(text[0].indexOf('onbewolkt')).toBeGreaterThanOrEqual(0);
    });
    page.getWeatherHumidity().then(text => {
      expect(text[0].indexOf('31')).toBeGreaterThanOrEqual(0);
    });
    page.getWeatherTemperature().then(text => {
      expect(text[0].indexOf('33.41')).toBeGreaterThanOrEqual(0);
    });
    page.getWeatherWindspeed().then(text => {
      expect(text[0].indexOf('1.98')).toBeGreaterThanOrEqual(0);
    });
  });
});
