/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import {AppModule} from '../../app.module';

import {HotelDetailComponent} from './hotel-detail.component';
import {Router, ActivatedRoute} from "@angular/router";
import {HotelsService} from "../hotels.service";
import {ApiService} from "../../services/api.service";
import {Http, ConnectionBackend, RequestOptions} from "@angular/http";

describe('HotelDetailComponent', () => {
  let component: HotelDetailComponent;
  let routerStub;
  let route;
  let hotelStub;

  beforeEach(() => {
    routerStub = {
      navigate: jasmine.createSpy('navigate')
    };

    hotelStub = {
      getHotels: jasmine.createSpy('getHotels'),
      goToHotels: jasmine.createSpy('getHotels')
    };
    route = {
      get: jasmine.createSpy('get')
    };

    TestBed.configureTestingModule({
      providers: [
        {provide: Router, useValue: routerStub},
        {provide: ActivatedRoute, useValue: route},
        {provide: HotelsService, useValue: hotelStub},
        HotelDetailComponent
      ]
    });
  });

  it('should create', inject([HotelsService], (service: HotelDetailComponent) => {
    expect(service).toBeTruthy();
  }));

  it('should go to hotels', inject([HotelDetailComponent], (service: HotelDetailComponent) => {
    service.goToHotels();
    expect(routerStub.navigate).toHaveBeenCalledWith(['/hotels']);
  }));

});
