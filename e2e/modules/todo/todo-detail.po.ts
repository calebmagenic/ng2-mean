import { browser, element, by, promise, ElementFinder } from 'protractor';

export class TodoDetail {
    getContainer() {
        return element(by.css('.todo-detail'));
    }

    getHeader() {
        return this.getContainer().element(by.css('.todo-detail-header'));
    }

    getHeaderText() {
        return this.getHeader().getText();
    }

    getDescriptionContainer() {
        return this.getContainer().element(by.css('.todo-description'));
    }

    getDescription() {
        return this.getDescriptionContainer().element(by.css('.todo-description-text'));
    }

    getDescriptionText() {
        return this.getDescription().getText();
    }
}