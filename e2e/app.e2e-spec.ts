import { Sales.WebPage } from './app.po';

describe('sales.web App', () => {
  let page: Sales.WebPage;

  beforeEach(() => {
    page = new Sales.WebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
