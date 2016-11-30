import { Injectable } from '@angular/core';

export class Hotel {
  constructor(public id: number, public name: string) { }
}

let HOTELS = [
  new Hotel(11, 'Stay Okay'),
  new Hotel(13, 'Je moeders bed'),
  new Hotel(12, 'Antons bed'),
  new Hotel(14, 'Bij timon thuis'),
  new Hotel(15, 'Waterkribbors'),
  new Hotel(16, 'RubberManMeneerJongen')
];

let hotelsPromise = Promise.resolve(HOTELS);

@Injectable()
export class HotelsService {

  constructor() { }
  getHotels() { return hotelsPromise; }
  getHotel(id: number | string) {
    return hotelsPromise
      .then(hotels => hotels.find(hotel => hotel.id === +id));
  }
}
