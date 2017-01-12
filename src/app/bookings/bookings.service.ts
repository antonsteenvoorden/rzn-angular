/**
 * Created by Zairon on 10-Dec-16.
 */

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Configuration} from '../app.constants';
import {ApiService} from '../services/api.service';
import {Booking} from "../models/booking";

@Injectable()

export class BookingService {

  constructor(private http:Http, private conf:Configuration, private api:ApiService) {
  }

  toBooking(r:any):Booking {
    let hotelName;
    if(r.hotel){
      hotelName = r.hotel.name;
    }
    if(r.Hotel){
      hotelName = r.Hotel.Name;
    }
    let booking = <Booking>({
      id: r.Id || r.id,
      hotel: r.Hotel || r.hotel,
      contactPerson: r.ContactPerson || r.contactPerson,
      numberOfTravellers: r.NumberOfTravellers || r.numberOfTravellers,
      travellers:null,
      startDate: r.StartDate || r.startDate,
      endDate: r.EndDate || r.endDate,
      country: r.Country || r.country,
      price: r.Price || r.price,
      capacity: r.Capacity || r.capacity,
      stars: r.Stars || r.stars,
      rating: r.Rating || r.rating
    });
    return booking;
  }

  getBookings() {
    let id = JSON.parse(localStorage.getItem('user')).id;
    return this.api.get('bookings/' + id)
      .map((res)=>{
        let bookings = res.json().map(this.toBooking);
        return bookings;
      });
  }
}
