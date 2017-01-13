/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import {AppModule} from '../app.module';
import {WeatherComponent} from "./weather.component";
import {WeatherService} from "./weather.service";


describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  let weatherStub;


    beforeEach(() => {
      weatherStub = {
        getWeather: jasmine.createSpy('getWeather')
      };
      TestBed.configureTestingModule({
        providers: [
          {provide: WeatherService, useValue: weatherStub},
          WeatherComponent
        ]
      });
    });


  it('should create', () => {
    component = new WeatherComponent(weatherStub);
    expect(component).toBeTruthy();
  });

  it('should convert properly', inject([WeatherComponent], (component: WeatherComponent) => {
    let sut = component.kelvinToCelsiusRounded(300.55555);
    expect(component).toBeTruthy();
    expect(sut).toEqual(27.56);
  }));

  it('should handle results properly', inject([WeatherComponent], (component: WeatherComponent) => {
    let results = {
      main:{
        temp:300,
        humidity:5,
      },
      wind:{
        speed:5,
      },
      weather:[
        {
          description:'onbewolkt'
        }
      ]
    };

    let sut = component.handleResults(results);
    expect(component).toBeTruthy();
  }));
});
