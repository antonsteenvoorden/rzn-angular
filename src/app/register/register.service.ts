/**
 * Created by Zairon on 05-Dec-16.
 */

import {Injectable} from '@angular/core';
import {User} from "../models/user";
import {ApiService} from "../services/api.service";

@Injectable()

export class RegisterService {

  constructor(private api:ApiService) {
  }

  public postRegisterUser(user:User) {
    this.api.post('travellers', user)
      .subscribe(data => {
        console.log(data);
      },
      error => {
        alert(error)
      });
  }
}
