/**
 * Created by Anton on 13/12/2016.
 */
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Configuration} from '../app.constants';

@Injectable()
export class ApiService {
  headers: Headers;

  constructor(private http:Http, private configuration:Configuration) {
    this.headers = new Headers();
    this.headers.append('content-type', 'application/x-www-form-urlencoded');
    this.headers.append("Access-Token","12341234");
  }

  get(route) {
    let headers = this.headers;

    let apiCall = this.http
      .get(this.configuration.testServer + route, {headers});
    return apiCall;
  }
}
