/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {AppModule} from '../app.module';
import {Router} from "@angular/router";
import {Hotel} from "../models/hotel";
import {ApiService} from "../services/api.service";
import {WeatherService} from "./weather.service";
import {UserService} from "../services/user.service";
import {Http} from "@angular/http";
import {Configuration} from "../app.constants";

describe('Service: WeatherService', () => {
  let routerStub;
  let apiStub;
  let configurationStub;

  beforeEach(() => {
    routerStub = {
      navigate: jasmine.createSpy('navigate')
    };
    apiStub = {
      get: jasmine.createSpy('get')
    };
    configurationStub = {
      weatherApiUrl:'http://127.0.0.1',
      weatherApiKey:'test'
    };

    TestBed.configureTestingModule({
      providers: [
        {provide: Router, useValue: routerStub},
        {provide: Http, useValue: apiStub},
        {provide: Configuration, useValue: configurationStub},
        WeatherService
      ]
    });
  });

  it('should create', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));
  it('should give a promise', inject([WeatherService], (service: WeatherService) => {
    let hotel = new Hotel(
      "1",
      null,
      null,
      "nederland",
      "nederland",
      null,
      null,
      null,
      null,
      null,
      null,
      null
    );

    let sut = service.getWeather(hotel);
    expect(sut instanceof Object).toEqual(true);
    expect(service).toBeTruthy();
  }));

});
