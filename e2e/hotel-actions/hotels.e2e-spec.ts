import {HotelsPage} from './hotels.po';
import {LoginPage} from "../profile-actions/login.po";
import {MyProfilePage} from "../profile-actions/my-profile.po";

describe('Hotels', function () {
  let page: HotelsPage;
  let loginPage: LoginPage;
  let myProfilePage: MyProfilePage;

  beforeEach(() => {
    loginPage = new LoginPage();
    loginPage.navigateTo();
    loginPage.login();
    page = new HotelsPage();
  });

  afterEach(() => {
    myProfilePage = new MyProfilePage();
    myProfilePage.navigateTo();
    myProfilePage.logoutFromProfile();
  });

  it('should view hotels page', () => {
    page.navigateTo();
    page.getHotelsPageText();
    expect(page.getHotelsPageText()).toEqual('Hotels');
  });

  it('should return the right amount of hotels', () => {
    page.navigateTo();
    expect(page.hotelsCount()).toEqual(7);
  });

});
