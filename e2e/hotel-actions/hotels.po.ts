import {browser, element, by} from 'protractor';

export class HotelsPage {
  navigateTo() {
    browser.get('/hotels');
    browser.sleep(1000);
  }

  getHotelsPageText() {
    return element(by.id('hotels-title')).getText();
  }

  hotelsCount() {
    return element.all(by.css('.is-hotel'))
      .then(allElements => {
        return allElements.length;
      });
  }

  bookFirstHotel() {
    let hotel = element.all(by.css('is-hotel')).get(0);
    hotel.click();

    let bookButton1 = element(by.id('book-button'));
    bookButton1.click();

    let bookButton2 = element(by.id('book-button'));
    bookButton2.click();
  }

}
