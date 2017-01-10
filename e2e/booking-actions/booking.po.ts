import {browser, element, by} from 'protractor';

export class BookingPage {
  navigateTo() {
    browser.get('/bookings');
    browser.sleep(1500);
  }

  getFirstHotel(){
    let hotel = element.all(by.id('hotel.1'));
    hotel.click();
  }

  getHotelsPageText() {
    return element(by.id('hotels-title')).getText();
  }

  getBookingId(){
    let tmp = element.all(by.id("booking.id"));
    return tmp.getText();
  }
  
  getBookingCity(){
    let tmp = element.all(by.id("booking.city"));
    return tmp.getText();
  }  
  getBookingNumberOfTravellers(){
    let tmp = element.all(by.id("booking.numberOfTravellers"));
    return tmp.getText();
  }  
  getBookingPrice(){
    let tmp = element.all(by.id("booking.price"));
    return tmp.getText();
  }
  getBookingCheckin(){
    let tmp = element.all(by.id("booking.checkin"));
    return tmp.getText();
  }
  getBookingCheckout(){
    let tmp = element.all(by.id("booking.checkout"));
    return tmp.getText();
  }

}
