import {LoginPage} from './login.po';
import {browser} from "protractor";
import {MyProfilePage} from "./my-profile.po";

describe('Login', function () {
  let page: LoginPage;
  let profilePage: MyProfilePage;


  beforeEach(() => {
    browser.get('');
    page = new LoginPage();
  });

  afterEach(() => {
    profilePage = new MyProfilePage();
    profilePage.navigateTo();
    profilePage.logoutFromProfile();
  });

  it('should login and be redirected to homepage', ()=>{
    page.navigateTo();
    expect(page.getLoginPageText()).toEqual('Login');
    page.login();
    expect(browser.getCurrentUrl()).toEqual('/');
  });

});
