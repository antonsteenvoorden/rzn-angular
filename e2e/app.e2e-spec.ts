import { RznAngularPage } from './app.po';

describe('rzn-angular App', function() {
  let page: RznAngularPage;

  beforeEach(() => {
    page = new RznAngularPage();
  });

  it('should display message saying Angular Router', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular Router');
  });
});
