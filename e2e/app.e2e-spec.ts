import { CoachdashboardPage } from './app.po';

describe('coachdashboard App', () => {
  let page: CoachdashboardPage;

  beforeEach(() => {
    page = new CoachdashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
