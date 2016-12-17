/**
 * Created by Zairon on 05-Dec-16.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class User {

  id: number;
  firstName: String;
  lastName: String;
  birthDate: String;
  password: String;
  repeatPassword: String;
  address: String;
  city: String;
  postalCode: String;
  phoneNumber: String;
  email: String;

  constructor() {
  }


  public _toString = (): string => {
    return `User (email: ${this.email})`;
  }
}
