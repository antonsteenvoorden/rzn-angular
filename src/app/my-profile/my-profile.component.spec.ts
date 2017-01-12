/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';


import {MyProfileComponent} from './my-profile.component';
import {AppModule} from './../app.module';
import {LoggedInGuard} from "../guards/logged-in.guard";

describe('MyProfileComponent', () => {
  let component: MyProfileComponent;
  let fixture: ComponentFixture<MyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        AppModule]
    })
      .compileComponents();
  }));

  it('should create', () => {
    let sut = new MyProfileComponent(null, null);
    expect(sut).toBeTruthy();
  });

  it('should create logged in guard', () => {
    let sut = new LoggedInGuard();
    expect(sut).toBeTruthy();
  });

  it('should create not be allowed to navigate', () => {
    let router = {
      navigate:function(){}
    };
    let userService = {
      isLoggedIn:function(){}
    };

    let sut = new LoggedInGuard(router, userService);

    let tmp = sut.canActivate();

    expect(tmp).toEqual(false);
  });
  
  it('should create not be allowed to navigate', () => {
    let router = {
      navigate:function(){}
    };
    let userService = {
      isLoggedIn:function(){ return true }
    };

    let sut = new LoggedInGuard(router, userService);

    let tmp = sut.canActivate();

    expect(tmp).toEqual(false);
  })

});
