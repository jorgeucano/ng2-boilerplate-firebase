export class Ng2BoilerplateRouterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-boilerplate-router-app h1')).getText();
  }
}
