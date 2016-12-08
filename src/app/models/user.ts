/**
 * Created by Zairon on 05-Dec-16.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class User {
  firstName: String;
  lastName: String;
  password: String;
  repeatPassword: String;
  email: String;

  // constructor(firstName, lastName, password, repeatPassword, email){
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.password = password;
  //   this.repeatPassword = repeatPassword;
  //   this.email = email;
  // }
}
