import { LazoUIPage } from './app.po';

describe('lazo-ui App', function() {
  let page: LazoUIPage;

  beforeEach(() => {
    page = new LazoUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
