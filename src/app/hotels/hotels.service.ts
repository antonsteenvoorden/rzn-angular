import { Injectable } from '@angular/core';

export class Hotel {
  public id: number;
  public name: string;
  public description:string;
  public longitude: number;
  public latitude: number;
  public imageLocation:string;
  public imageAlt:string;

  constructor(id: number,
              name: string,
              description:string){
    this.id = id;
    this.name = name;
    this.description = description;
    this.longitude = parseInt("51.678418");
    this.latitude = parseInt("7.809007");
    this.imageLocation = "https://media-cdn.tripadvisor.com/media/photo-s/07/9c/8b/8b/hotel-yurbban-trafalgar.jpg";
    this.imageAlt = "Afbeelding van een hotel";
  }
              // imageLocation:string,
              // imageAlt:string) { }
}

let HOTELS = [
  new Hotel(7, 'Stay Okay', 'Heel knus in de boerderij'),
  new Hotel(8, 'Stay Okay', 'Heel knus in de boerderij'),
  new Hotel(9, 'Stay Okay', 'Heel knus in de boerderij'),
  new Hotel(10, 'Stay Okay', 'Heel knus in de boerderij'),
  new Hotel(11, 'Stay Okay', 'Heel knus in de boerderij'),
  new Hotel(13, 'Formule 1 Hotel', 'Mijn favoriete locatie voor onderweg'),
  new Hotel(12, 'Antons Hotel', 'Hoge kwaliteit, goede service'),
  new Hotel(14, 'Bij timon thuis', 'Plekje in de stad'),
  new Hotel(15, 'Waterkribbors', 'Mooiste plek aan het water'),
  new Hotel(16, 'RubberManMeneerJongen', 'Tijdens het fietsen moet je niet vallen')
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
