/**
 * Created by Zairon on 05-Dec-16.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class User {

  ID: number;
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

  get getID(): number {
    return this.ID;
  }

  set setID(value: number) {
    this.ID = value;
  }

  get getFirstName(): String {
    return this.firstName;
  }

  set setFirstName(value: String) {
    this.firstName = value;
  }

  get getLastName(): String {
    return this.lastName;
  }

  set setLastName(value: String) {
    this.lastName = value;
  }

  get getBirthDate(): String {
    return this.birthDate;
  }

  set setBirthDate(value: String) {
    this.birthDate = value;
  }

  get getPassword(): String {
    return this.password;
  }

  set setPassword(value: String) {
    this.password = value;
  }

  get getRepeatPassword(): String {
    return this.repeatPassword;
  }

  set setRepeatPassword(value: String) {
    this.repeatPassword = value;
  }

  get getAddress(): String {
    return this.address;
  }

  set setAddress(value: String) {
    this.address = value;
  }

  get getCity(): String {
    return this.city;
  }

  set setCity(value: String) {
    this.city = value;
  }

  get getPostalCode(): String {
    return this.postalCode;
  }

  set setPostalCode(value: String) {
    this.postalCode = value;
  }

  get getPhoneNumber(): String {
    return this.phoneNumber;
  }

  set setPhoneNumber(value: String) {
    this.phoneNumber = value;
  }

  get getEmail(): String {
    return this.email;
  }

  set setEmail(value: String) {
    this.email = value;
  }

  public _toString = (): string => {
    return `User (email: ${this.email})`;
  }
}
