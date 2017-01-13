/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {HotelsService} from './hotels.service';
import {AppModule} from '../app.module';
import {Router} from "@angular/router";
import {Hotel} from "../models/hotel";
import {ApiService} from "../services/api.service";

describe('Service: Hotels', () => {
  let routerStub;
  let apiStub;

  beforeEach(() => {
    routerStub = {
      navigate: jasmine.createSpy('navigate')
    };
    apiStub = {
      get: jasmine.createSpy('get')
    };

    TestBed.configureTestingModule({
      providers: [
        {provide: Router, useValue: routerStub},
        HotelsService,
        {provide: ApiService, useValue: apiStub}
      ]
    });
  });

  it('should create', inject([HotelsService], (service: HotelsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return the correctly filtered hotels', inject([HotelsService], (service: HotelsService) => {
    let testData = [
      new Hotel(
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
      ),
      new Hotel(
        "2",
        null,
        null,
        "zweden",
        "zweden",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      )
    ];

    let expectedHotelLenght = 1;

    let actualData = service.filterByQuery(testData, "zweden");

    expect(expectedHotelLenght).toBe(actualData.length);
  }));
});
