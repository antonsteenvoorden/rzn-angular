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

  }
  getBookingId(){
    let tmp = element.all(by.id("booking.id"));
    return tmp.getText();
  }
  
}
