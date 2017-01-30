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

    getActiveButtonClass() {
        return this.getActiveButton().getAttribute("class");
    }

    getCompletedButton() {
        return this.getContainer().element(by.css('.todo-state-completed'));
    }

    getCompletedButtonText() {
        return this.getCompletedButton().getText();
    }

    getCompletedButtonClass() {
        return this.getCompletedButton().getAttribute("class");
    }

    getAddButton() {
        return this.getContainer().element(by.css('.todo-add'));
    }

    getAddButtonText() {
        return this.getAddButton().getText();
    }

    getAddButtonClass() {
        return this.getAddButton().getAttribute("class");
    }

    clickActiveButton() {
        return this.getActiveButton().click();
    }

    clickCompletedButton() {
        return this.getCompletedButton().click();
    }

    clickAddButton() {
        return this.getAddButton().click();
    }
}