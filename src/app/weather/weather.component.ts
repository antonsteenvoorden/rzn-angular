/**
 * Created by Anton on 08/12/2016.
 */
import {Component, Input, OnInit } from '@angular/core';
import {WeatherService} from './weather.service';
import {Hotel} from "../hotels/hotels.service";

declare var temperature;

@Component({
  selector: 'rzn-weather',
  template: '{{temperature}}'
})
export class WeatherComponent implements OnInit{
  @Input() hotel: Hotel;
  temperature: string;

  constructor(private service:WeatherService) {
  }

  ngOnInit() {
    console.log(this);
    this.setTemperature();

  }
  setTemperature(){
    this.service.getWeather(this.hotel)
      .then((results) => {
        console.log('results in component is ', results);
        this.temperature = JSON.stringify(results);
      });
  }
}
