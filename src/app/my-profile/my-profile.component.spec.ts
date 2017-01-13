/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';


import {MyProfileComponent} from './my-profile.component';
import {AppModule} from './../app.module';
import {LoggedInGuard} from "../guards/logged-in.guard";
import {Router, NavigationExtras} from "@angular/router";
import {UserService} from "../services/user.service";

describe('MyProfileComponent', () => {
  let component: MyProfileComponent;
  let fixture: ComponentFixture<MyProfileComponent>;

  let routerStub;
  let localStorageStub;

  beforeEach(() => {
    routerStub = {
      navigate: jasmine.createSpy('navigate')
    };
    localStorageStub = {
      getItem: function () {
        return true;
      }
    };
    TestBed.configureTestingModule({
      providers: [
        {provide: Router, useValue: routerStub},
        {provide: localStorage, useValue: localStorageStub}
      ]
    });
  });

  it('should create', () => {
    let userService: UserService;
    userService = new UserService(null, null);

    userService.isLoggedIn = function () {
      return false
    };
    userService.logout = function () {
    };

    let sut = new MyProfileComponent(userService, routerStub);
    expect(sut).toBeTruthy();
  });

  it('should create logged in guard', () => {
    let sut = new LoggedInGuard(null, null);
    expect(sut).toBeTruthy();
  });

  it('should not be allowed to navigate', () => {
    let userService: UserService;
    userService = new UserService(null, null);
    userService.isLoggedIn = function () {
      return false
    };

    let sut = new LoggedInGuard(routerStub, userService);

    let tmp = sut.canActivate();

    expect(tmp).toEqual(false);
  });

  it('should be allowed to navigate', () => {
    let userService: UserService;
    userService = new UserService(null, null);
    userService.isLoggedIn = function () {
      return true;
    };

    let sut = new LoggedInGuard(routerStub, userService);

    let tmp = sut.canActivate();
    expect(tmp).toEqual(false);
  });

});
