import { browser, element, by, promise, ElementFinder } from 'protractor';

import { BasePage } from '../../testing/base-page.po';

import { Header } from '../core/header.po';

export class AppPage extends BasePage {
  constructor() {
    super('app-root > div', '/');
  }

  getContainerClass(): promise.Promise<String> {
    return this.getClass(this.getContainer());
  }

  getAppHeader(): ElementFinder {
    return this.get("app-header", this.getContainer());
  }

  getAppHeaderBinding(): promise.Promise<String> {
    return this.getBinding("text", this.getAppHeader());
  }

  getRouterOutlet(): ElementFinder {
    return this.get("router-outlet", this.getContainer());
  }

  getHeaderObject(): Header {
    return new Header();
  }
}
