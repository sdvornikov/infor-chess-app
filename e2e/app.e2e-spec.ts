import { InforChessAppPage } from './app.po';

describe('infor-chess-app App', () => {
  let page: InforChessAppPage;

  beforeEach(() => {
    page = new InforChessAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
