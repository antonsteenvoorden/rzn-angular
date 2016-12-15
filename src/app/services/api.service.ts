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
    headers.append('content-type', 'application/x-www-form-urlencoded');
    headers.append('content-type', 'json/application');
    if (localStorage.getItem("auth_token")) {
      headers.append("Access-Token", localStorage.getItem("auth_token"));
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

