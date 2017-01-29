import { browser, element, by, promise, ElementFinder } from 'protractor';

export class TodoStateMenu {
    getContainer() {
        return element(by.css('.todo-state-menu'));
    }

    getActiveButton() {
        return this.getContainer().element(by.css('.todo-state-active'));
    }

    getActiveButtonText() {
        return this.getActiveButton().getText();
    }

    getCompletedButton() {
        return this.getContainer().element(by.css('.todo-state-completed'));
    }

    getCompletedButtonText() {
        return this.getCompletedButton().getText();
    }

    getAddButton() {
        return this.getContainer().element(by.css('.todo-add'));
    }

    getAddButtonText() {
        return this.getAddButton().getText();
    }

    clickActiveButton() {
        this.getActiveButton().click();
    }

    clickCompletedButton() {
        this.getCompletedButton().click();
    }

    clickAddButton() {
        this.getAddButton().click();
    }
}