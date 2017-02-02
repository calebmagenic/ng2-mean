import { AppPage } from './app.po';

describe('NG2 MEAN TODO app', function() {
  let page: AppPage;

  beforeEach(async () => {
    page = new AppPage();
    await page.navigateTo();
  });

  it("should set the browser title", async (done) => {
    expect(await page.getTitle()).toEqual('Mean TODO');
    done();
  });

  it("should provide a container element", async (done)=> {
    expect(await page.getContainer().isPresent()).toBe(true);
    done();
  });

  it("should provide a themed container element", async (done) => {
    expect(await page.getContainerClass()).toBe('app theme mono grey');
    done();
  });

  it("should provide an app-header", async (done) => {
    expect(await page.getAppHeader().isPresent()).toBe(true);
    done();
  });

  it("should bind app header text", async (done) => {
    expect(await page.getAppHeaderBinding()).toBe('NG2 MEAN: TODO');
    done();
  });

  it("should provide a router outlet", async (done) => {
    expect(await page.getRouterOutlet().isPresent()).toBe(true);
    done();
  });
});
