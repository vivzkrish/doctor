import { DoctorPage } from './app.po';

describe('doctor App', () => {
  let page: DoctorPage;

  beforeEach(() => {
    page = new DoctorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
