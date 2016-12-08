import { Injectable } from '@angular/core';

export class Hotel {
  public id: number;
  public name: string;
  public description:string;
  public longitude: number;
  public latitude: number;
  public imageLocation:string;
  public imageAlt:string;
  public country:string;

  constructor(id: number,
              name: string,
              description:string,
              country:string){
    this.id = id;
    this.name = name;
    this.description = description;
    this.longitude = parseInt("51.678418");
    this.latitude = parseInt("7.809007");
    this.imageLocation = "https://media-cdn.tripadvisor.com/media/photo-s/07/9c/8b/8b/hotel-yurbban-trafalgar.jpg";
    this.imageAlt = "Afbeelding van een hotel";
    this.country = country;
  }
              // imageLocation:string,
              // imageAlt:string) { }
}

let HOTELS = [
  new Hotel(7, 'Stay Okay', 'Heel knus in de boerderij', "nederland"),
  new Hotel(8, 'Stay Okay', 'Heel knus in de boerderij', "frankrijk"),
  new Hotel(9, 'Stay Okay', 'Heel knus in de boerderij', "duitsland"),
  new Hotel(10, 'Stay Okay', 'Heel knus in de boerderij',"belgie"),
  new Hotel(11, 'Stay Okay', 'Heel knus in de boerderij', "zweden"),
  new Hotel(13, 'Formule 1 Hotel', 'Mijn favoriete locatie voor onderweg', "zweden"),
  new Hotel(12, 'Antons Hotel', 'Hoge kwaliteit, goede service', "nederland"),
  new Hotel(14, 'Bij timon thuis', 'Plekje in de stad', "afrika"),
  new Hotel(15, 'Waterkribbors', 'Mooiste plek aan het water', "nederland"),
  new Hotel(16, 'RubberManHotel', 'Tijdens het fietsen moet je niet vallen', "zweden")
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
  getHotelsByCountry(country){
    var tmpHotels = [];
    for(let i =0; i < HOTELS.length; i++) {
      var hotel = HOTELS[i];
        if(hotel.country === country){
          tmpHotels.push(hotel);
        }
    }
    
    return Promise.resolve(tmpHotels);
  }
}
