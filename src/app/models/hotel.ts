/**
 * Created by Zairon on 13-Dec-16.
 */

import {Injectable} from '@angular/core';

@Injectable()
export class User {
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

  public toString = (): string => {
    return `User (email: ${this.name})`;
  }
}
