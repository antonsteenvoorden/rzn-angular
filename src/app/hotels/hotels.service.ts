import {Injectable} from '@angular/core';

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
              country: string) {
    this.id = id;
    this.city = city;
    this.name = name;
    this.description = description;
    this.longitude = parseFloat('51.678418');
    this.latitude = parseFloat('7.809007');
    this.imageLocation = 'https://media-cdn.tripadvisor.com/media/photo-s/07/9c/8b/8b/hotel-yurbban-trafalgar.jpg';
    this.imageAlt = 'Afbeelding van een hotel';
    this.country = country;
  }

  // imageLocation:string,
  // imageAlt:string) { }
}

let HOTELS = [
  new Hotel(7, 'Kaatsheuvel', 'Stay Okay', 'Heel knus in de boerderij', 'nederland'),
  new Hotel(8, 'Parijs', 'Stay Okay', 'Heel knus in de boerderij', 'frankrijk'),
  new Hotel(9, 'Hamburg', 'Stay Okay', 'Heel knus in de boerderij', 'duitsland'),
  new Hotel(10, 'Brugge', 'Stay Okay', 'Heel knus in de boerderij', 'belgie'),
  new Hotel(11, 'Tumba', 'Stay Okay', 'Heel knus in de boerderij', 'zweden'),
  new Hotel(13, 'Stockholm', 'Formule 1 Hotel', 'Mijn favoriete locatie voor onderweg', 'zweden'),
  new Hotel(12, 'Lisse', 'Antons Hotel', 'Hoge kwaliteit, goede service', 'nederland'),
  new Hotel(14, 'Zimbabwe', 'Bij timon thuis', 'Plekje in de stad', 'afrika'),
  new Hotel(15, 'Leiden', 'Waterkribbors', 'Mooiste plek aan het water', 'nederland'),
  new Hotel(16, 'Gotenborg', 'RubberManHotel', 'Tijdens het fietsen moet je niet vallen', 'zweden')
];

let hotelsPromise = Promise.resolve(HOTELS);

@Injectable()
export class HotelsService {

  constructor() {
  }

  getHotels() {
    return hotelsPromise;
  }

  getHotel(id: number | string) {
    return hotelsPromise
      .then(hotels => hotels.find(hotel => hotel.id === +id));
  }

  getHotelsByCountry(country) {
    let tmpHotels = [];
    for (let i = 0; i < HOTELS.length; i++) {
      let hotel = HOTELS[i];
      if (hotel.country.includes(country)) {
        tmpHotels.push(hotel);
      }
    }

    return Promise.resolve(tmpHotels);
  }
}
