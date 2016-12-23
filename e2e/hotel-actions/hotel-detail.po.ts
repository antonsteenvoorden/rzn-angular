import {browser, element, by} from 'protractor';

export class TravelPlanner {
  navigateTo() {
    browser.get('/hotels');
    browser.sleep(1000);
  }

  getFirstHotel(){
    let hotel = element.all(by.css('is-hotel')).get(0);
    hotel.click();
  }
  getHotelsPageText() {
    return element(by.id('hotels-title')).getText();
  }

  bookFirstHotel() {
    let hotel = element.all(by.css('is-hotel')).get(0);
    hotel.click();

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
}
