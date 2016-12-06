/**
 * Created by Zairon on 05-Dec-16.
 */

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Configuration} from '../app.constants';

@Injectable()

export class RegisterService {

  constructor(private http: Http, private conf: Configuration) {
  }

  getSomething() {
    return this.http.get('http://date.jsontest.com').map(res => res.json())
  }

  postSomething() {
    var json = JSON.stringify({var1: 'Hi', var2: 'Hello'});
    var params = 'json=' + json;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('http://validate.jsontest.com', params, {
      headers: headers
    }).map(res => res.json());
  }
}
