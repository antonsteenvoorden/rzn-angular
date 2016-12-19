/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {HotelsService} from './hotels.service';
import {AppModule} from '../app.module';

describe('Service: Hotels', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: [AppModule]
    });
  });

  it('should create', inject([HotelsService], (service: HotelsService) => {
    expect(service).toBeTruthy();
  }));
});
