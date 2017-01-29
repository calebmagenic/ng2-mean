import { AppPage } from './app.po';

describe('NG2 MEAN TODO app', function() {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should set the browser title", () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Mean TODO');
  });

  it("should provide a container element", () => {
    page.navigateTo();
    expect(page.getContainer().isPresent()).toBe(true);
  });

  it("should provide a themed container element", () => {
    page.navigateTo();
    expect(page.getContainerClass()).toBe('app default-mono-theme');
  });

  it("should provide an app-header", () => {
    page.navigateTo();
    expect(page.getAppHeader().isPresent()).toBe(true);
  });

  it("should bind app header text", () => {
    page.navigateTo();
    expect(page.getAppHeaderText()).toBe('NG2 MEAN: TODO');
  });

  it("should provide a router outlet", () => {
    page.navigateTo();
    expect(page.getRouterOutlet().isPresent()).toBe(true);
  });
});
