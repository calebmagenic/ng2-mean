import { browser, element, by, promise, ElementFinder,  } from 'protractor';

export class TodoItem {
    constructor(private e: ElementFinder) {
    }

    static getList() {
        let list: TodoItem[] = [];

        return element.all(by.css('app-todo')).each((e: ElementFinder, i: Number) => {
            list.push(new TodoItem(e));
        }).then(() => {
            return list;
        })
    }

    element(locator: any): ElementFinder {
        return this.e.element(locator);
    }

    getContainer() {
        return this.element(by.css('.todo'));
    }

    getView() {
        return this.getContainer().element(by.css('.todo-view'));
    }

    getViewOperations() {
        return this.getView().element(by.css('.todo-operations'));
    }

    getEditButton() {
        return this.getViewOperations().element(by.css('.todo-edit-toggle'));
    }

    getDeleteButton() {
        return this.getViewOperations().element(by.css('.todo-delete'));
    }

    getViewTextRegion() {
        return this.getView().element(by.css('.todo-text-region.todo-text'));
    }

    getViewTextRegionText() {
        return this.getViewTextRegion().getText();
    }

    getEditView() {
        return this.getContainer().element(by.css('.todo-edit'));
    }

    getEditViewOperations() {
        return this.getEditView().element(by.css('.todo-operations'));
    }

    getSaveButton() {
        return this.getEditViewOperations().element(by.css('.todo-edit-toggle'));
    }

    getCancelButton() {
        return this.getEditViewOperations().element(by.css('.todo-edit-cancel'));
    }

    getEditForm() {
        return this.getEditView().element(by.css('.todo-text-region.todo-form'));
    }

    getCheckbox() {
        return this.getEditForm().element(by.css('.todo-form-checkbox'));
    }

    getTextInputLabel() {
        return this.getEditForm().element(by.css('.todo-form .form-group .todo-form-text.todo-form-text-label'));
    }

    getTextInput() {
        return this.getEditForm().element(by.css('.todo-form .form-group .todo-form-input'));
    }

    getDescriptionInputLabel() {
        return this.getEditForm().element(by.css('.todo-form .form-group .todo-form-text.todo-form-description-label'));
    }

    getDescriptionInput() {
        return this.getEditForm().element(by.css('.todo-form .form-group .todo-form-textarea'));
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