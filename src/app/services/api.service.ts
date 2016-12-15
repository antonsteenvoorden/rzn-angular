/**
 * Created by Anton on 13/12/2016.
 */
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Configuration} from '../app.constants';
import {User} from "../models/user";
import {Hotel} from "../hotels/hotels.service";
import {Booking} from "../models/booking";

@Injectable()
export class ApiService {
  headers: Headers;

  constructor(private http: Http, private configuration: Configuration) {
    this.headers = new Headers();
    this.headers.append('content-type', 'application/x-www-form-urlencoded');
    this.headers.append("Access-Token", "12341234");
  }

  get(route) {
    let headers = this.headers;

    let apiCall = this.http
      .get(this.configuration.testServer + route, {headers});
    return apiCall;
  }

  postRegisterUser(user: User) {
    let json = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/api/register', json, {
      headers: headers
    }).map(res => res.json());
  }

  postBookHotel(booking: Booking) {
    let json = JSON.stringify(booking);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/api/book', json, {
      headers: headers
    }).map(res => res.json());
  }
}
