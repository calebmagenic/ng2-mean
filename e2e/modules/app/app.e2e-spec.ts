import { AppPage } from './app.po';

describe('NG2 MEAN TODO app', function() {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should set the browser title", async (done) => {
    page.navigateTo();
    expect(await page.getTitle()).toEqual('Mean TODO');
    done();
  });

  it("should provide a container element", async (done)=> {
    page.navigateTo();
    expect(await page.getContainer().isPresent()).toBe(true);
    done();
  });

  it("should provide a themed container element", async (done) => {
    page.navigateTo();
    expect(await page.getContainerClass()).toBe('app default-mono-theme');
    done();
  });

  it("should provide an app-header", async (done) => {
    page.navigateTo();
    expect(await page.getAppHeader().isPresent()).toBe(true);
    done();
  });

  it("should bind app header text", async (done) => {
    page.navigateTo();
    expect(await page.getAppHeaderText()).toBe('NG2 MEAN: TODO');
    done();
  });

  it("should provide a router outlet", async (done) => {
    page.navigateTo();
    expect(await page.getRouterOutlet().isPresent()).toBe(true);
    done();
  });
});
