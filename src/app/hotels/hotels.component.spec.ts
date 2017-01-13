/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppModule} from '../app.module';
import {HotelsComponent} from './hotels.component';
import {Router} from "@angular/router";
import {HotelsService} from "./hotels.service";
import {Hotel} from "../models/hotel";

describe('HotelsComponent', () => {
  let component: HotelsComponent;
  let fixture: ComponentFixture<HotelsComponent>;

  let routerStub;
  beforeEach(() => {
    routerStub = {
      navigate: jasmine.createSpy('navigate')
    };
    TestBed.configureTestingModule({
      providers: [
        {provide: Router, useValue: routerStub}
      ]
    });
  });

  it('should create', () => {
    let hotelService:HotelsService;
    let hotelsComponent:HotelsComponent;

    hotelService = new HotelsService(null);
    hotelsComponent = new HotelsComponent(routerStub, null, hotelService);
    expect(hotelsComponent).toBeTruthy();
  });

  it('should create', () => {
    let hotelService:HotelsService;
    let hotelsComponent:HotelsComponent;

    hotelService = new HotelsService(null);
    hotelsComponent = new HotelsComponent(routerStub, null, hotelService);
    let hotel:Hotel;
    hotel = new Hotel(
      "1",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    );

    hotelsComponent.onSelect(hotel);
    expect(hotelsComponent).toBeTruthy();
    expect(routerStub.navigate).toHaveBeenCalledWith(['/hotels', '1', {country: undefined}]);
  });
});
