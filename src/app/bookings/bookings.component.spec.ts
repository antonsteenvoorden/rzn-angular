/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppModule} from '../app.module';

import {BookingsComponent} from './bookings.component';
import {BookingService} from "./bookings.service";

describe('BookingsComponent', () => {
  let component: BookingsComponent;
  let fixture: ComponentFixture<BookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        AppModule]
    })
      .compileComponents();
  }));


  it('should convert to booking', () => {
    let sut = new BookingService(null, null, null);
    let testData = [
      {
        "hotel": {
          "id": 1,
          "name": "Test",
          "capacity": 5,
          "description": "Coole hotel",
          "longitude": 5.1234123,
          "latitude": 7.123141,
          "imageLocation": "https://media-cdn.tripadvisor.com/media/photo-s/08/cd/99/1a/hard-rock-hotel-ibiza.jpg",
          "country": "nederland",
          "pricePerDay": 12.5,
          "rating": 9,
          "stars": 5,
          "city": "Lisse",
          "createdAt": "2017-01-10T11:56:19.180Z",
          "updatedAt": "2017-01-10T11:56:19.180Z"
        },
        "contactPerson": 1,
        "numberOfTravellers": 2,
        "startDate": "01-01-2017",
        "endDate": "10-01-2017",
        "price": 10.5,
        "createdAt": "2017-01-10T11:56:19.172Z",
        "updatedAt": "2017-01-10T11:56:19.172Z",
        "id": 9
      }
    ];

    let tmp = sut.toBooking(testData);
    expect(tmp).toBeTruthy();
  });
});
