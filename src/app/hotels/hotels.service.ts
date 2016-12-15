import {Injectable} from '@angular/core';
import {Configuration} from '../app.constants';
import {ApiService} from '../services/api.service';
import {Hotel} from '../models/hotel';
let HOTELS = [];

// let HOTELS = [
//   new Hotel(7, 'Kaatsheuvel', 'Stay Okay', 'Heel knus in de boerderij', 'nederland'),
//   new Hotel(8, 'Parijs', 'Stay Okay', 'Heel knus in de boerderij', 'frankrijk'),
//   new Hotel(9, 'Hamburg', 'Stay Okay', 'Heel knus in de boerderij', 'duitsland'),
//   new Hotel(10, 'Brugge', 'Stay Okay', 'Heel knus in de boerderij', 'belgie'),
//   new Hotel(11, 'Tumba', 'Stay Okay', 'Heel knus in de boerderij', 'zweden'),
//   new Hotel(13, 'Stockholm', 'Formule 1 Hotel', 'Mijn favoriete locatie voor onderweg', 'zweden'),
//   new Hotel(12, 'Lisse', 'Antons Hotel', 'Hoge kwaliteit, goede service', 'nederland'),
//   new Hotel(14, 'Zimbabwe', 'Bij timon thuis', 'Plekje in de stad', 'afrika'),
//   new Hotel(15, 'Leiden', 'Waterkribbors', 'Mooiste plek aan het water', 'nederland'),
//   new Hotel(16, 'Gotenborg', 'RubberManHotel', 'Tijdens het fietsen moet je niet vallen', 'zweden')
// ];

let hotelsPromise = Promise.resolve(HOTELS);

@Injectable()
export class HotelsService {

  constructor(private api:ApiService) {
  }

  getHotels() {
    return this.api.get('hotels')
      .map((res)=>{
        HOTELS = res.json().map(this.toHotel);
        return HOTELS;
      });
  }

  toHotel(r:any):Hotel {
    let hotel = <Hotel>({
      id: r.id,
      name: r.name,
      description: r.description,
      city: r.city,
      longitude: r.longitude,
      latitude: r.latitude,
      imageLocation: r.imageLocation,
      country: r.country
    });
    return hotel;
  }

  getHotel(id:number | string) {
    console.log(HOTELS);
    return Promise.resolve(HOTELS.find(hotel => hotel.id === +id));
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
