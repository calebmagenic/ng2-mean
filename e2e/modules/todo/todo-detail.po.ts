import { browser, element, by, promise, ElementFinder } from 'protractor';

import { BaseComponent } from '../../testing/base-component.po';

export class TodoDetail extends BaseComponent {
    constructor() {
        super('.todo-detail');
    }

    getHeader() {
        return this.get('.todo-detail-header', this.getContainer());
    }

    getHeaderText() {
        return this.getText(this.getHeader());
    }

    getDescriptionContainer() {
        return this.get('.todo-description', this.getContainer());
    }

    getDescription() {
        return this.get('.todo-description-text', this.getDescriptionContainer());
    }

    getDescriptionText() {
        return this.getText(this.getDescription());
    }
}