/**
 * Created by Zairon on 13-Dec-16.
 */

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Configuration} from '../../../app.constants';
import {User} from "../../../models/user";
import {Hotel} from "../../hotels.service";
import {Booking} from "../../../models/booking";

@Injectable()

export class BookHotelService {

  constructor(private http: Http, private conf: Configuration) {
  }

  public postBookHotel(user: User, hotel: Hotel, AllTravlers: User[]) {
    let json = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/api/book', json, {
      headers: headers
    }).map(res => res.json());
  }
}
