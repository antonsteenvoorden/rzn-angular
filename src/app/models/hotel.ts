/**
 * Created by Zairon on 13-Dec-16.
 */

import {Injectable} from '@angular/core';

@Injectable()
export class Hotel {

  public id: number;
  public name: string;
  public description: string;
  public city: string;
  public longitude: number;
  public latitude: number;
  public imageLocation: string;
  public imageAlt: string;
  public country: string;

  constructor() {
  }

  public get getID(): number {
    return this.id;
  }

  public set setID(value: number) {
    this.id = value;
  }

  public get getName(): string {
    return this.name;
  }

  public set setName(value: string) {
    this.name = value;
  }

  public get getDescription(): string {
    return this.description;
  }

  public set setDescription(value: string) {
    this.description = value;
  }

  public get getCity(): string {
    return this.city;
  }

  public set setCity(value: string) {
    this.city = value;
  }

  public get getLongitude(): number {
    return this.longitude;
  }

  public set setLongitude(value: number) {
    this.longitude = value;
  }

  public get getLatitude(): number {
    return this.latitude;
  }

  public set setLatitude(value: number) {
    this.latitude = value;
  }

  public get getImageLocation(): string {
    return this.imageLocation;
  }

  public set setImageLocation(value: string) {
    this.imageLocation = value;
  }

  public get getImageAlt(): string {
    return this.imageAlt;
  }

  public set setImageAlt(value: string) {
    this.imageAlt = value;
  }

  public get getCountry(): string {
    return this.country;
  }

  public set setCountry(value: string) {
    this.country = value;
  }

  public toString = (): string => {
    return `Hotel (name: ${this.name})`;
  }
}
