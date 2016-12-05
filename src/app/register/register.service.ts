/**
 * Created by Zairon on 05-Dec-16.
 */

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Configuration} from '../app.constants';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class RegisterService {
  private conf;

  constructor(private http: Http) {
    this.conf = new Configuration();
  }

  public createAccount() {
  }
}
