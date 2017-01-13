/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import {AppModule} from '../app.module';
import {LoginComponent} from './login.component';
import {User} from "../models/user";
import {UserService} from "../services/user.service";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with service', inject([UserService], (service: UserService) => {
    let sut = new LoginComponent(service);

    expect(sut).toBeTruthy();
  }));

  it('should create with service and call login', inject([UserService], (service: UserService) => {
    let sut = new LoginComponent(service);
    sut.login();
    expect(sut).toBeTruthy();
  }));

});
