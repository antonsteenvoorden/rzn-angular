/**
 * Created by Zairon on 13-Dec-16.
 */

import {Injectable} from '@angular/core';
import {User} from "../../../models/user";
import {Booking} from "../../../models/booking";
import {ApiService} from "../../../services/api.service";
import {Hotel} from "../../../models/hotel";

@Injectable()

export class BookHotelService {

  constructor(private api: ApiService) {
  }

  public postBookHotel(hotel: Hotel, travelers: User[], startDate: string, endDate: string) {
    let booking: Booking = new Booking;
    booking.contactPerson = JSON.parse(localStorage.getItem('user')).id;
    booking.hotel = hotel.id;
    booking.startDate = startDate;
    booking.endDate = endDate;
    booking.travelers = travelers;

    this.api.post('bookings', booking)
      .subscribe(data => {
        },
        error => {
          alert(error);
        });
  }
}
