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

  public postBookHotel(user: User, hotel: Hotel, allTravlers: User[], startDate: string, endDate: string) {
    let booking: Booking;
    booking = new Booking;

    booking.setContactPerson = user.getID;
    booking.setHotelID = hotel.getID;
    booking.setStartDate = startDate;
    booking.setEndDate = endDate;
    booking.setTravelers = allTravlers;

    this.api.postBookHotel(booking).subscribe(
      data => {
      },
      error => alert(error),
      () => {
      })
    ;
  }
}
