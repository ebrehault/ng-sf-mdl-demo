import { NgSfMdl2Page } from './app.po';

describe('ng-sf-mdl2 App', () => {
  let page: NgSfMdl2Page;

  beforeEach(() => {
    page = new NgSfMdl2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
