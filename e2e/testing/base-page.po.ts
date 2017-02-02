import { browser, element, by, promise, ElementFinder } from 'protractor';

import { BaseComponent } from './base-component.po';

export class BasePage extends BaseComponent {
    constructor(root: string, private path: string) {
        super(root);
    }

    navigateTo(): promise.Promise<any> {
        return browser.get(this.path);
    }

    getTitle(): promise.Promise<string> {
        return browser.getTitle();
    }
}