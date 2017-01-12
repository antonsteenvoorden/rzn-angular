/**
 * Created by Anton on 13/12/2016.
 */
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Configuration} from '../app.constants';

@Injectable()
export class ApiService {
  constructor(private http:Http, private configuration:Configuration) {

  }

  getHeaders() {
    var headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    if (localStorage.getItem("auth_token")) {
      let auth = "Basic " + localStorage.getItem("auth_token");
      console.log(auth);
      headers.append("Authorization", auth);
    }
    return headers;
  }

  get(route) {
    let headers = this.getHeaders();

    let apiCall = this.http
      .get(this.configuration.testServer + route, {headers});
    return apiCall;
  }

  post(route, object:any) {
    let data = JSON.stringify(object);
    let headers = this.getHeaders();

    return this.http
      .post(this.configuration.testServer + route, data, {headers})
      .map(res => res.json());
  }

  put(route, object:any) {
    let data = JSON.stringify(object);
    let headers = this.getHeaders();

    return this.http
      .put(this.configuration.testServer + route, data, {headers})
      .map(res => res.json());
  }
}

