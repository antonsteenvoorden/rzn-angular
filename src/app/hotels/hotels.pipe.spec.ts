/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {AppModule} from '../app.module';
import {HotelPipe} from "./hotels.pipe";
import {Hotel} from "../models/hotel";

describe('Pipe: Hotels', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: [AppModule]
    });
  });

  it('should create', () => {
    let pipe = new HotelPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform the list of hotels', () => {
    let pipe = new HotelPipe();
    let testData = [
      new Hotel(
        "1",
        null,
        "Nederland",
        "Nederland",
        "Nederland",
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
        "Zweden",
        "Zweden",
        "Zweden",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      )
    ];


    let filtered = pipe.transform(testData ,'Zweden');
    expect(pipe).toBeTruthy();
    expect(filtered.length).toEqual(1);
  });
});
