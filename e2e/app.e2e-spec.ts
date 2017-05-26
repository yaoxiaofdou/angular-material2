import { AngularMaterial2Page } from './app.po';

describe('angular-material2 App', () => {
  let page: AngularMaterial2Page;

  beforeEach(() => {
    page = new AngularMaterial2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
