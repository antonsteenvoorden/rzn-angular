import {browser, element, by} from 'protractor';

export class BookingPage {
  navigateTo() {
    browser.get('/hotels');
    browser.sleep(1500);
    this.bookFirstHotel()
  }

  getFirstHotel(){
    let hotel = element.all(by.id('hotel.1'));
    hotel.click();
  }

  getHotelsPageText() {
    return element(by.id('hotels-title')).getText();
  }

  bookFirstHotel() {
    this.getFirstHotel();

    let bookButton1 = element(by.id('book-button'));
    bookButton1.click();

    let bookButton2 = element(by.id('book-button'));
    bookButton2.click();
  }

  addTravelerToBooking() {
    let hotel = element.all(by.id('hotels')).get(0);
    hotel.click();

    let bookButton1 = element(by.id('book-button'));
    bookButton1.click();

    // TODO: add traveler to booking
  }
  getWeatherDescription(){
    let tmp = element.all(by.id("weather.description"));
    return tmp.getText();
  }
  getWeatherHumidity(){
    let tmp = element.all(by.id("weather.humidity"));
    return tmp.getText();
  }
  getWeatherTemperature(){
    let tmp = element.all(by.id("weather.temperature"));
    return tmp.getText();
  }
  getWeatherWindspeed(){
    let tmp = element.all(by.id("weather.windspeed"));
    return tmp.getText();
  }
}
