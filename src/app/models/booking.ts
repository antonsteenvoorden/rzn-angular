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

  get getBookingID(): number {
    return this.bookingID;
  }

  set setBookingID(value: number) {
    this.bookingID = value;
  }

  get getHotelID(): number {
    return this.hotelID;
  }

  set setHotelID(value: number) {
    this.hotelID = value;
  }

  get getContactPerson(): number {
    return this.contactPerson;
  }

  set setContactPerson(value: number) {
    this.contactPerson = value;
  }

  get getNumberOfTravelers(): number {
    return this.numberOfTravelers;
  }

  set setNumberOfTravelers(value: number) {
    this.numberOfTravelers = value;
  }

  get getTravelers(): User[] {
    return this.travelers;
  }

  set setTravelers(value: User[]) {
    this.travelers = value;
  }

  get getStartDate(): String {
    return this.startDate;
  }

  set setStartDate(value: String) {
    this.startDate = value;
  }

  get getEndDate(): String {
    return this.endDate;
  }

  set setEndDate(value: String) {
    this.endDate = value;
  }
}
