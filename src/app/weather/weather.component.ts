/**
 * Created by Anton on 08/12/2016.
 */
import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from './weather.service';
import {Hotel} from "../models/hotel";

@Component({
  selector: 'rzn-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {
  @Input() hotel: Hotel;
  temperature: number;
  humidity: number;
  windspeed: number;
  description: string;

  constructor(private service: WeatherService) {
  }

  ngOnInit() {
    this.getFromWeatherApi();
  }

  getFromWeatherApi() {
    this.service.getWeather(this.hotel)
      .then((results) => {
        console.log('results in component is ', results);
        this.handleResults(results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleResults(results) {
    this.temperature = this.kelvinToCelsiusRounded(results.main.temp);
    this.humidity = results.main.humidity;
    this.windspeed = results.wind.speed;
    this.description = results.weather[0].description;
  }

  kelvinToCelsiusRounded(temperature) {
    return Math.round((temperature - 273) * 100) / 100;
  }
}
