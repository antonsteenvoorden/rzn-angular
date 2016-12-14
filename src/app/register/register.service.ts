/**
 * Created by Zairon on 05-Dec-16.
 */

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Configuration} from '../app.constants';
import {User} from "../models/user";

@Injectable()

export class RegisterService {

  constructor(private http: Http, private conf: Configuration) {
  }

  public postRegisterUser(user: User) {
    let json = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/api/register', json, {
      headers: headers
    }).map(res => res.json());
  }
}
