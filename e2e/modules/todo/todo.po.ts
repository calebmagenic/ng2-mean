import { browser, element, by, promise, ElementFinder } from 'protractor';

import { BaseComponent } from '../../testing/base-component.po';

export class TodoItem extends BaseComponent {
    constructor(private e: ElementFinder) {
        super('.todo', e);
    }

    static getList(): promise.Promise<TodoItem[]> {
        let list: TodoItem[] = [];

        return element.all(by.css('app-todo')).each((e: ElementFinder, i: Number) => {
            list.push(new TodoItem(e));
        }).then(() => {
            return list;
        })
    }

    getContainerClass() {
        return this.getClass(this.getContainer());
    }

    getView() {
        return this.get('.todo-view', this.getContainer());
    }

    getViewOperations() {
        return this.get('.todo-operations', this.getView());
    }

    getEditButton() {
        return this.get('.todo-edit-toggle', this.getViewOperations());
    }

    getEditButtonText() {
        return this.getText(this.getEditButton());
    }

    getDeleteButton() {
        return this.get('.todo-delete', this.getViewOperations());
    }

    getDeleteButtonText() {
        return this.getText(this.getDeleteButton());
    }

    getViewTextRegion() {
        return this.get('.todo-text-region.todo-text', this.getView());
    }

    getViewTextRegionText() {
        return this.getText(this.getViewTextRegion());
    }

    getEditView() {
        return this.get('.todo-edit', this.getContainer());
    }

    getEditViewOperations() {
        return this.get('.todo-operations', this.getEditView());
    }

    getSaveButton() {
        return this.get('.todo-edit-toggle', this.getEditViewOperations());
    }

    getSaveButtonText() {
        return this.getText(this.getSaveButton());
    }

    getCancelButton() {
        return this.get('.todo-edit-cancel', this.getEditViewOperations());
    }

    getCancelButtonText() {
        return this.getText(this.getCancelButton());
    }

    getEditForm() {
        return this.get('.todo-text-region.todo-form', this.getEditView());
    }

    getCheckbox() {
        return this.get('.todo-form-checkbox', this.getEditForm());
    }

    getCheckboxState() {
        return this.getCheckbox().isSelected();
    }

    getTextInputLabel() {
        return this.get('.form-group .todo-form-text.todo-form-text-label', this.getEditForm());
    }

    getTextInputLabelText() {
        return this.getText(this.getTextInputLabel());
    }

    getTextInput() {
        return this.get('.form-group .todo-form-input', this.getEditForm());
    }

    getTextInputValue() {
        return this.getValue(this.getTextInput());
    }

    getDescriptionInputLabel() {
        return this.get('.form-group .todo-form-text.todo-form-description-label', this.getEditForm());
    }

    getDescriptionInputLabelText() {
        return this.getText(this.getDescriptionInputLabel());
    }

    getDescriptionInput() {
        return this.get('.form-group .todo-form-textarea', this.getEditForm());
    }

    getDescriptionInputValue() {
        return this.getValue(this.getDescriptionInput());
    }


    setTextInput(input: string) {
        return this.getTextInput().clear().then(() => {
            return this.getTextInput().sendKeys(input);
        })
    }

    setDescriptionInput(input: string) {
        return this.getDescriptionInput().clear().then(() => {
            return this.getDescriptionInput().sendKeys(input);
        });
    }

    setCheckboxState(checked: boolean) {
        return this.getCheckboxState().then(state => {
            if(state != checked) {
                return this.getCheckbox().click();
            } else {
                return promise.fulfilled(null);
            }
        })
    }


    clickDeleteButton() {
        return this.getDeleteButton().click();
    }

    clickEditButton() {
        return this.getEditButton().click();
    }

    clickSaveButton() {
        return this.getSaveButton().click();
    }

    clickCancelButton() {
        return this.getCancelButton().click();
    }
}