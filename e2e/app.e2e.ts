import { Ng2BoilerplateRouterPage } from './app.po';

describe('ng2-boilerplate-router App', function() {
  let page: Ng2BoilerplateRouterPage;

  beforeEach(() => {
    page = new Ng2BoilerplateRouterPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-boilerplate-router works!');
  });
});
