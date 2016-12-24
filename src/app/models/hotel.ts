/**
 * Created by Zairon on 13-Dec-16.
 */

import {Injectable} from '@angular/core';

@Injectable()
export class Hotel {

  public id:number;
  public name:string;
  public description:string;
  public city:string;
  public longitude:number;
  public latitude:number;
  public imageLocation:string;
  public imageAlt:string;
  public country:string;
  public stars:number;
  public rating:number;
  public capacity:number;
  public pricePerDay:number;

  constructor(id:number,
              city:string,
              name:string,
              description:string,
              country:string,
              latitude:number,
              longitude:number,
              imageLocation:string,
              rating:number,
              stars:number,
              capacity:number,
              pricePerDay:number) {
    this.id = id;
    this.city = city;
    this.name = name;
    this.description = description;
    this.longitude = longitude;
    this.latitude = latitude;
    this.imageLocation = imageLocation;
    this.imageAlt = 'Afbeelding van' + name;
    this.country = country;
    this.stars = stars;
    this.rating = rating;
    this.capacity = capacity;
    this.pricePerDay = pricePerDay;
  }

  public toString = ():string => {
    return `Hotel (name: ${this.name})`;
  }
}
