/**
 * Created by Zairon on 10-Dec-16.
 */

import {Injectable} from '@angular/core';
import {User} from "./user";

@Injectable()
export class Booking {
  bookingID: number;
  hotelID: number;
  contactPerson: number;
  numberOfTravelers: number;
  travelers: User[];
  startDate: String;
  endDate: String;

  constructor() {
  }
}
