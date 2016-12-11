/**
 * Created by Zairon on 10-Dec-16.
 */

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Configuration} from '../app.constants';

@Injectable()

export class BookingService {

  constructor(private http: Http, private conf: Configuration) {
  }

  getBookings() {
    return this.http.get('http://localhost:3000/api/bookings').map(res => res.json());
  }
}
