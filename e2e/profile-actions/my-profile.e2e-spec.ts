import {MyProfilePage} from './my-profile.po';
import {LoginPage} from './login.po';

describe('TravelPlanner', function () {
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
      let email:"antons@live.nl";
      let firstName:"Anton";
      let lastName:"Steenvoorden";
      let phoneNumber:"1234512345";
      let postalCode:"2162CS";
      let address:"Teststraat 1";
      let city:"Tumba";

      expect(page.getEmail()).toEqual(email);
      expect(page.getFirstName()).toEqual(firstName);
      expect(page.getLastName()).toEqual(lastName);
      expect(page.getPhoneNumber()).toEqual(phoneNumber);
      expect(page.getPostalCode()).toEqual(postalCode);
      expect(page.getAddress()).toEqual(address);
      expect(page.getCity()).toEqual(city);
  });

});
