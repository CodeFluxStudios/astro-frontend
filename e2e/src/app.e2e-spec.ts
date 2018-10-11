import {AppPage} from './app.po';

describe('Home Tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateToHome();
  });

  it('should display login button', () => {
    expect(page.getHomeLoginButtonText()).toEqual('LOGIN');
  });

  it('should display copyright', () => {
    expect(page.getFooterCopyright()).toContain('CodeFlux Studios');
  });
});
