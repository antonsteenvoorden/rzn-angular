import {Injectable} from '@angular/core';
import {Configuration} from '../app.constants';
import {ApiService} from '../services/api.service';
import {Hotel} from '../models/hotel';
let HOTELS = [];

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

  getHotelsByQuery(query: string) {
    return this.api.get('hotels')
      .map((res)=>{
        HOTELS = res.json().map(this.toHotel);
        HOTELS = this.filterByQuery(HOTELS, query);
        return HOTELS;
      });
  }

  toHotel(r:any):Hotel {
    let hotel = <Hotel>({
      id: r.Id || r.id,
      name: r.Name || r.name,
      description: r.Description || r.description,
      city: r.City || r.city,
      longitude: r.Longitude1 || r.longitude,
      latitude: r.Latitude1 || r.latitude,
      imageLocation: r.Imagelocation || r.imageLocation,
      country: r.Country || r.country,
      pricePerDay: r.Priceperday || r.pricePerDay,
      capacity: r.Capacity || r.capacity,
      stars: r.Stars || r.stars,
      rating: r.Rating || r.rating
    });
    return hotel;
  }

  getHotel(id:string) {
    return Promise.resolve(HOTELS.find(hotel => hotel.id+"" === id));
  }

  filterByQuery(listOfHotels, query) {
    let tmpHotels = [];
    for (let i = 0; i < listOfHotels.length; i++) {
      let hotel = listOfHotels[i];
      if (hotel.country.includes(query) || hotel.description.includes(query)) {
        tmpHotels.push(hotel);
      }
    }
    return tmpHotels;
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
