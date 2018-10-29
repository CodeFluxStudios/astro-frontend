import {AppPage} from './app.po';

describe('Home Tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateToHome();
  });

  it('should display "GET STARTED" button', () => {
    expect(page.getHomeLoginButtonText()).toEqual('GET STARTED');
  });

  it('should display copyright', () => {
    expect(page.getFooterCopyright()).toContain('CodeFlux Studios');
  });
});
