import { Assignment144Page } from './app.po';

describe('assignment14-4 App', function() {
  let page: Assignment144Page;

  beforeEach(() => {
    page = new Assignment144Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
