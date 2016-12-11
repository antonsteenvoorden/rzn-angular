/**
 * Created by Zairon on 05-Dec-16.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class User {
  firstName: String;
  lastName: String;
  birthDate: String;
  password: String;
  repeatPassword: String;
  address: String;
  city: String;
  postalCode: String;
  phoneNumber: number;
  email: String;

  constructor() {
  }
}
