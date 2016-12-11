/**
 * Created by Zairon on 10-Dec-16.
 */

import {Injectable} from '@angular/core';

@Injectable()
export class Booking {
  bookingID: number;
  hotelID: number;
  hotelName: String;
  travelerID: number;
  numberOfTravelers: number;
  startDate: String;
  endDate: String;

  constructor() {
  }
}
