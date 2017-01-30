import { browser, element, by, promise, ElementFinder,  } from 'protractor';

export class Header {
    getContainer() {
        return element(by.css('.header'));
    }

    getHeader() {
        return this.getContainer().element(by.css('.header-text'));
    }

    getHeaderText() {
        return this.getHeader().getText();
    }
}