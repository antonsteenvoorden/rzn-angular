import {MyProfilePage} from './my-profile.po';
import {LoginPage} from './login.po';

describe('My Profile', function () {
  let page: MyProfilePage;
  let loginPage: LoginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
    loginPage.navigateTo();
    loginPage.login();
    page = new MyProfilePage();
    page.navigateTo();
  });

  afterEach(() => {
    page.logoutFromProfile();
  });

  it('should display user name', () => {
    let expectedWelcomeText = 'Hello, Anton Steenvoorden';
    expect(page.getProfilePageText()).toEqual(expectedWelcomeText);
  });

  it('should display the rest of the profile information', () => {
    expect(page.getFirstName()).toEqual("Anton");
    expect(page.getEmail()).toEqual("antons@live.nl");
    expect(page.getLastName()).toEqual("Steenvoorden");
    expect(page.getPhoneNumber()).toEqual("1234512345");
    expect(page.getPostalCode()).toEqual("2162CS");
    expect(page.getAddress()).toEqual("Teststraat 1");
    expect(page.getCity()).toEqual("Tumba");
  });

});
