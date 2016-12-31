/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppModule} from '../../../app.module';
import {BookHotelComponent} from './book-hotel.component';
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";

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
    let user: any = {
      firstName: 'Zai',
      lastName: 'Jacobs'
    }
    localStorage.setItem('user', JSON.stringify(user));

    fixture = TestBed.createComponent(BookHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    localStorage.clear();
  });

  it('should create BookHotelComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should set the range to the previous month', () => {
    component.setRange();
    let range: Date = component.range;
    expect(range.getMonth()).toEqual(new Date().getMonth() - 1);
    if (range.getMonth() == 12) {
      expect(range.getFullYear()).toEqual(new Date().getFullYear() - 1);
    } else {
      expect(range.getFullYear()).toEqual(new Date().getFullYear());
    }
  });

  it('should add a traveler', () => {
    component.pushTraveler();
    expect(component.travelers.length).toEqual(1);

    component.pushTraveler();
    expect(component.travelers.length).toEqual(2);
  });

  it('should remove a traveler', () => {
    let user1: User = new User();
    user1.firstName = 'user1';
    let user2: User = new User();
    user2.firstName = 'user2';

    component.travelers.push(user1);
    component.travelers.push(user2);

    component.removeTraveler(user1);

    expect(component.travelers.length).toEqual(1);
    expect(component.travelers.pop().firstName).toEqual('user2');
  });
});
