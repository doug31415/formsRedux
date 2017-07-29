import { FormsReduxPage } from './app.po';

describe('forms-redux App', () => {
  let page: FormsReduxPage;

  beforeEach(() => {
    page = new FormsReduxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
