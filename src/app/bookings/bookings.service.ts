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
    let id = JSON.parse(localStorage.getItem('user')).id;
    return this.http.get('bookings/' + id)
      .map(res => res.json());
  }
}
