import { browser, element, by, promise, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle(): promise.Promise<String> {
    return browser.getTitle();
  }

  getContainer(): ElementFinder {
    return element(by.css("app-root > div"));
  }

  getContainerClass(): promise.Promise<String> {
    return this.getContainer().getAttribute("class");
  }

  getAppHeader(): ElementFinder {
    return element(by.css("app-header"));
  }

  getAppHeaderText(): promise.Promise<String> {
    return this.getAppHeader().getAttribute("ng-reflect-text");
  }

  getRouterOutlet(): ElementFinder {
    return element(by.css("router-outlet"));
  }
}
