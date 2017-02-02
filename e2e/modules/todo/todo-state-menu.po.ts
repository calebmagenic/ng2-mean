import { browser, element, by, promise, ElementFinder } from 'protractor';

import { BaseComponent } from '../../testing/base-component.po';

export class TodoStateMenu extends BaseComponent {
    constructor() {
        super('.todo-state-menu');
    }

    getActiveButton() {
        return this.get('.todo-state-active', this.getContainer());
    }

    getActiveButtonText() {
        return this.getText(this.getActiveButton());
    }

    getActiveButtonClass() {
        return this.getClass(this.getActiveButton());
    }

    getCompletedButton() {
        return this.get('.todo-state-completed', this.getContainer());
    }

    getCompletedButtonText() {
        return this.getText(this.getCompletedButton());
    }

    getCompletedButtonClass() {
        return this.getClass(this.getCompletedButton());
    }

    getAddButton() {
        return this.get('.todo-add', this.getContainer());
    }

    getAddButtonText() {
        return this.getText(this.getAddButton());
    }

    getAddButtonClass() {
        return this.getClass(this.getAddButton());
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