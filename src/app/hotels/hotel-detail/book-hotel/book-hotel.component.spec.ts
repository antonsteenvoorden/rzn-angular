/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppModule} from '../../../app.module';
import {BookHotelComponent} from './book-hotel.component';
import {User} from "../../../models/user";

describe('BookHotelComponent', () => {
  let component: BookHotelComponent;
  let fixture: ComponentFixture<BookHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // TODO: get an existing user from the api
    let user: User = new User;
    user.firstName = '';
    user.lastName = '';
    localStorage.setItem('user', JSON.stringify(user));

    fixture = TestBed.createComponent(BookHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
