/**
 * Created by Zairon on 10-Dec-16.
 */

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Configuration} from '../app.constants';
import {ApiService} from '../services/api.service';

@Injectable()

export class BookingService {

  constructor(private http: Http, private conf: Configuration, private api: ApiService) {
  }

  // getBookings() {
  //   let id = JSON.parse(localStorage.getItem('user')).id;
  //   return this.http.get('bookings/' + id)
  //     .map(res => res.json());
  // }
  getBookings() {
    let id = JSON.parse(localStorage.getItem('user')).id;
    return this.api.get('bookings/' + id)
      .map(res => res.json());
  }
}
