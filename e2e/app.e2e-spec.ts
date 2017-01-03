import { Angular2AppStarterPage } from './app.po';

describe('angular2-app-starter App', function() {
  let page: Angular2AppStarterPage;

  beforeEach(() => {
    page = new Angular2AppStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
