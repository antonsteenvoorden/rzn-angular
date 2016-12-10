/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {AppModule} from '../app.module';
import {HotelsDirective} from './hotels.directive';

describe('Directive: Hotels', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: [AppModule]
    });
  });

  it('should create an instance', () => {
    let directive = new HotelsDirective();
    expect(directive).toBeTruthy();
  });
});
