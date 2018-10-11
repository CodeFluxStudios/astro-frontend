import {browser, by, element} from 'protractor';

export class AppPage {
  navigateToHome() {
    return browser.get('/');
  }

  getHomeLoginButtonText() {
    return element(by.id('homeLoginBtn')).getText();
  }

  getFooterCopyright() {
    return element(by.id('copyright')).getText();
  }
}
