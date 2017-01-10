/**
 * Created by Zairon on 10-Dec-16.
 */

import {Injectable} from '@angular/core';
import {User} from "./user";

@Injectable()
export class Booking {

  id: string;
  hotel: string;
  contactPerson: string;
  numberOfTravellers: number;
  travellers: User[];
  startDate: String;
  endDate: String;
  price: number;

  constructor() {
  }
}
