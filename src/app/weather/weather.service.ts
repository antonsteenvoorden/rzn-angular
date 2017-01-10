/**
 * Created by Anton on 08/12/2016.
 */
import {Configuration} from '../app.constants';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Promise} from 'ts-promise';

@Injectable()
export class WeatherService {
  constructor(private http:Http,
              private configuration:Configuration) {
  }

  getWeather(hotel) {
    return new Promise((resolve, reject) => {
      this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + hotel.latitude + '&lon=' + hotel.longitude
          + '&lang=nl&APPID=' + this.configuration.weatherApiKey)
        .map(results => results.json())
        .subscribe(results => {
          resolve(results);
        }, error => {
          reject(error);
        });
    });
  }

}

