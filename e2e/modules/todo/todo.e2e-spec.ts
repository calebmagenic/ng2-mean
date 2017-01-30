import { TodoList } from './todo-list.po';
import { TodoItem } from './todo.po';

describe('Todo Item', () => {
    let page: TodoList;
    let todo: TodoItem;
    let text: string = 'todo item text';
    let description: string = 'todo item description';

    beforeEach((done) => {
        page = new TodoList();
        page.navigateTo();
        page.removeAllTodos().then(() => {
            page.addNewTodo(text, description).then(() => {
                page.getTodoItem(0).then(item => {
                    todo = item;
                    done();
                });
            });
        });
    });

    it('should provide a container', () => {
        expect(todo.getContainer().isPresent()).toBe(true);
    });

    describe('Initial View State', () => {
        it('should provide a view container', () => {
            expect(todo.getView().isPresent()).toBe(true);
        });
        it('should not provide edit view', () => {
            expect(todo.getEditView().isPresent()).toBe(false);
        });
        it('should provide todo operations', () => {
            expect(todo.getViewOperations().isPresent()).toBe(true);
        });
        it('should provide todo text region', () => {
            expect(todo.getViewTextRegion().isPresent()).toBe(true);
        });

        describe('Todo Operations', () => {
            it('should provide Edit button', () => {
                expect(todo.getEditButton().isPresent()).toBe(true);
            });
            it('should provide Delete button', () => {
                expect(todo.getDeleteButton().isPresent()).toBe(true);
            });

            describe('Edit Button', () => {
                it('should contain Edit text', () => {
                    expect(todo.getEditButtonText()).toBe('Edit');
                });
                it('should display todo item in edit mode', () => {
                    todo.clickEditButton().then(() => {
                        expect(todo.getEditView().isPresent()).toBe(true);
                        todo.getContainer().getAttribute("class").then(classNames => {
                            var classes = classNames.split(' ');
                            var className = classes[1];
                            expect(className).toBe('todo-edit-mode');
                        });
                    });
                });
            });

            describe('Delete Button', () => {
                it('should contain Delete text', () => {
                    expect(todo.getDeleteButtonText()).toBe('Delete');
                });
                it('should remove todo item from list', () => {
                    todo.clickDeleteButton().then(() => {
                        page.getTodoList().then(items => {
                            expect(items).not.toBeNull();
                            expect(items.length).toBe(0);
                        });
                    });
                });
            });
        });

        describe('Text Region', () => {
            it('should show todo text', () => {
                expect(todo.getViewTextRegionText()).toBe(text);
            });
        });
    });

    describe('Edit Mode State', () => {
        beforeEach(() => {
            // item was added, so lets click edit
            todo.clickEditButton();
        });

        it('should not provide a view container', () => {
            expect(todo.getView().isPresent()).toBe(false);
        });
        it('should provide an edit view container', () => {
            expect(todo.getEditView().isPresent()).toBe(true);
        });
        it('should provide todo operations', () => {
            expect(todo.getEditViewOperations().isPresent()).toBe(true);
        });
        it('should provide edit form', () => {
            expect(todo.getEditForm().isPresent()).toBe(true);
        });

        describe('Todo Operations', () => {
            it('should provide Save button', () => {
                expect(todo.getSaveButton().isPresent()).toBe(true);
            });
            it('should provide Cancel button', () => {
                expect(todo.getCancelButton().isPresent()).toBe(true);
            });

            describe('Save Button', () => {
                const saveText = 'save input item text';
                const saveDescription = 'save input item description';

                it('should contain Save text', () => {
                    expect(todo.getSaveButtonText()).toBe('Save');
                });
                it('should save todo item', (done) => {
                    todo.setTextInput(saveText).then(() => {
                        todo.setDescriptionInput(saveDescription).then(() => {
                            todo.clickSaveButton().then(() => {
                                page.getTodoItem(0).then(item => {
                                    item.clickEditButton().then(() => {
                                        expect(item.getTextInputValue()).toBe(saveText);
                                        expect(item.getDescriptionInputValue()).toBe(saveDescription);
                                        done();
                                    });
                                });
                            });
                        });
                    });
                });
            });

            describe('Cancel Button', () => {
                const cancelText = 'cancel edit text';
                const cancelDescription = 'cancel edit description';

                it('should contain Cancel text', () => {
                    expect(todo.getCancelButtonText()).toBe('Cancel');
                });
                it('should cancel edit and return to view mode', (done) => {
                    todo.clickCancelButton().then(() => {
                        expect(todo.getView().isPresent()).toBe(true);
                        expect(todo.getEditView().isPresent()).toBe(false);
                        done();
                    });
                });
            });
        });

        describe('Edit Form', () => {
            it('should provide checkbox', () => {
                expect(todo.getCheckbox().isPresent()).toBe(true);
            });
            it('should provide todo text input label with Text value', () => {
                expect(todo.getTextInputLabel().isPresent()).toBe(true);
                expect(todo.getTextInputLabelText()).toBe('Text');
            });
            it('should provide auto-populated todo text input', () => {
                expect(todo.getTextInput().isPresent()).toBe(true);
                expect(todo.getTextInputValue()).toBe(text);
            });
            it('should provide todo description input label with Description value', () => {
                expect(todo.getDescriptionInputLabel().isPresent()).toBe(true);
                expect(todo.getDescriptionInputLabelText()).toBe('Description');
            });
            it('should provide auto-populated todo description input', () => {
                expect(todo.getDescriptionInput().isPresent()).toBe(true);
                expect(todo.getDescriptionInputValue()).toBe(description);
            });
        });
        
    });
});