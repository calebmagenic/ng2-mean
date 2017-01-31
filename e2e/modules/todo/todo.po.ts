import { browser, element, by, promise, ElementFinder } from 'protractor';

export class TodoItem {
    constructor(private e: ElementFinder) {
    }

    static getList(): promise.Promise<TodoItem[]> {
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

    getContainerClass() {
        return this.getContainer().getAttribute("class");
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

    getEditButtonText() {
        return this.getEditButton().getText();
    }

    getDeleteButton() {
        return this.getViewOperations().element(by.css('.todo-delete'));
    }

    getDeleteButtonText() {
        return this.getDeleteButton().getText();
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

    getSaveButtonText() {
        return this.getSaveButton().getText();
    }

    getCancelButton() {
        return this.getEditViewOperations().element(by.css('.todo-edit-cancel'));
    }

    getCancelButtonText() {
        return this.getCancelButton().getText();
    }

    getEditForm() {
        return this.getEditView().element(by.css('.todo-text-region.todo-form'));
    }

    getCheckbox() {
        return this.getEditForm().element(by.css('.todo-form-checkbox'));
    }

    getCheckboxState() {
        return this.getCheckbox().isSelected();
    }

    getTextInputLabel() {
        return this.getEditForm().element(by.css('.form-group .todo-form-text.todo-form-text-label'));
    }

    getTextInputLabelText() {
        return this.getTextInputLabel().getText();
    }

    getTextInput() {
        return this.getEditForm().element(by.css('.form-group .todo-form-input'));
    }

    getTextInputValue() {
        return this.getTextInput().getAttribute('value');
    }

    getDescriptionInputLabel() {
        return this.getEditForm().element(by.css('.form-group .todo-form-text.todo-form-description-label'));
    }

    getDescriptionInputLabelText() {
        return this.getDescriptionInputLabel().getText();
    }

    getDescriptionInput() {
        return this.getEditForm().element(by.css('.form-group .todo-form-textarea'));
    }

    getDescriptionInputValue() {
        return this.getDescriptionInput().getAttribute('value');
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