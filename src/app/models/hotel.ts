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

  constructor(id: number,
              city: string,
              name: string,
              description: string,
              country: string,
              latitude: number,
              longitude: number,
              imageLocation: string) {
    this.id = id;
    this.city = city;
    this.name = name;
    this.description = description;
    this.longitude = longitude
    this.latitude = latitude;
    this.imageLocation = imageLocation;
    this.imageAlt = 'Afbeelding van' + name;
    this.country = country;
  }

  public toString = (): string => {
    return `Hotel (name: ${this.name})`;
  }
}
