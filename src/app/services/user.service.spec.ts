/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {AppModule} from '../app.module';
import {Router} from "@angular/router";
import {Hotel} from "../models/hotel";
import {ApiService} from "../services/api.service";
import {UserService} from "./user.service";

describe('Service: UserService', () => {
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
        {provide: ApiService, useValue: apiStub},
        UserService
      ]
    });
  });

  it('should create', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

});
