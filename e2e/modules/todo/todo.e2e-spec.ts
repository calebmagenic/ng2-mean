import { TodoList } from './todo-list.po';
import { TodoItem } from './todo.po';

describe('Todo Item', () => {
    let page: TodoList;
    let todo: TodoItem;
    let text: string = 'todo item text';
    let description: string = 'todo item description';

    beforeEach(async (done) => {
        page = new TodoList();
        
        await page.navigateTo();
        await page.removeAllTodos();
        await page.saveNewTodo(text, description);

        todo = await page.getTodoItem(0);

        done();
    });

    it('should provide a container', async (done) => {
        expect(await todo.getContainer().isPresent()).toBe(true);
        done();
    });

    describe('Initial View State', () => {
        it('should provide a view container', async (done) => {
            expect(await todo.getView().isPresent()).toBe(true);
            done();
        });
        it('should not provide edit view', async (done) => {
            expect(await todo.getEditView().isPresent()).toBe(false);
            done();
        });
        it('should provide todo operations', async (done) => {
            expect(await todo.getViewOperations().isPresent()).toBe(true);
            done();
        });
        it('should provide todo text region', async (done) => {
            expect(await todo.getViewTextRegion().isPresent()).toBe(true);
            done();
        });

        describe('Todo Operations', () => {
            it('should provide Edit button', async (done) => {
                expect(await todo.getEditButton().isPresent()).toBe(true);
                done();
            });
            it('should provide Delete button', async (done) => {
                expect(await todo.getDeleteButton().isPresent()).toBe(true);
                done();
            });

            describe('Edit Button', () => {
                it('should contain Edit text', async (done) => {
                    expect(await todo.getEditButtonText()).toBe('Edit');
                    done();
                });
                it('should display todo item in edit mode', async (done) => {
                    await todo.clickEditButton();
                    
                    let classNames = await todo.getContainerClass();
                    let classes = classNames.split(' ');
                    let className = classes[1];

                    expect(await todo.getEditView().isPresent()).toBe(true);
                    expect(className).toBe('todo-edit-mode');

                    done();
                });
            });

            describe('Delete Button', () => {
                it('should contain Delete text', async (done) => {
                    expect(await todo.getDeleteButtonText()).toBe('Delete');
                    done();
                });
                it('should remove todo item from list', async (done) => {
                    await todo.clickDeleteButton();
                    let items = await page.getTodoList();

                    expect(items).not.toBeNull();
                    expect(items.length).toBe(0);

                    done();
                });
                it('should remove unsaved todo item from list', async (done) => {
                    await page.removeAllTodos();
                    
                    let newTodo = await page.getNewTodo();
                    await newTodo.clickDeleteButton();

                    let list = await page.getTodoList();

                    expect(list).not.toBeNull();
                    expect(list.length).toBe(0);

                    done();
                });
            });
        });

        describe('Text Region', () => {
            it('should show todo text', async (done) => {
                expect(await todo.getViewTextRegionText()).toBe(text);
                done();
            });
        });
    });

    describe('Edit Mode State', () => {
        beforeEach(async (done) => {
            // item was added, so lets click Edit
            await todo.clickEditButton();
            done();
        });

        it('should not provide a view container', async (done) => {
            expect(await todo.getView().isPresent()).toBe(false);
            done();
        });
        it('should provide an edit view container', async (done) => {
            expect(await todo.getEditView().isPresent()).toBe(true);
            done();
        });
        it('should provide todo operations', async (done) => {
            expect(await todo.getEditViewOperations().isPresent()).toBe(true);
            done();
        });
        it('should provide edit form', async (done) => {
            expect(await todo.getEditForm().isPresent()).toBe(true);
            done();
        });

        describe('Todo Operations', () => {
            it('should provide Save button', async (done) => {
                expect(await todo.getSaveButton().isPresent()).toBe(true);
                done();
            });
            it('should provide Cancel button', async (done) => {
                expect(await todo.getCancelButton().isPresent()).toBe(true);
                done();
            });

            describe('Save Button', () => {
                const saveText = 'save input item text';
                const saveDescription = 'save input item description';

                it('should contain Save text', async (done) => {
                    expect(await todo.getSaveButtonText()).toBe('Save');
                    done();
                });
                it('should save todo item', async (done) => {
                    await todo.setTextInput(saveText);
                    await todo.setDescriptionInput(saveDescription);
                    await todo.clickSaveButton();

                    let item = await page.getTodoItem(0);
                    await item.clickEditButton();
                                        
                    expect(await item.getTextInputValue()).toBe(saveText);
                    expect(await item.getDescriptionInputValue()).toBe(saveDescription);

                    done();
                });
            });

            describe('Cancel Button', () => {
                const cancelText = 'cancel edit text';
                const cancelDescription = 'cancel edit description';

                it('should contain Cancel text', async (done) => {
                    expect(await todo.getCancelButtonText()).toBe('Cancel');
                    done();
                });
                it('should cancel edit and return to view mode', async (done) => {
                    await todo.clickCancelButton();

                    expect(await todo.getView().isPresent()).toBe(true);
                    expect(await todo.getEditView().isPresent()).toBe(false);

                    done();
                });
                it('should cancel edit and return todo to previous state', async (done) => {
                    await todo.setTextInput(cancelText);
                    await todo.setDescriptionInput(cancelDescription);
                    await todo.setCheckboxState(true);
                    await todo.clickCancelButton();
                    await todo.clickEditButton();

                    let previousText = await todo.getTextInputValue();
                    let previousDescription = await todo.getDescriptionInputValue();

                    expect(previousText).toBe(text);
                    expect(previousDescription).toBe(description);

                    done();
                });
            });
        });

        describe('Edit Form', () => {
            it('should provide checkbox', async (done) => {
                expect(await todo.getCheckbox().isPresent()).toBe(true);
                done();
            });
            it('should provide todo text input label with Text value', async (done) => {
                expect(await todo.getTextInputLabel().isPresent()).toBe(true);
                expect(await todo.getTextInputLabelText()).toBe('Text');

                done();
            });
            it('should provide auto-populated todo text input', async (done) => {
                expect(await todo.getTextInput().isPresent()).toBe(true);
                expect(await todo.getTextInputValue()).toBe(text);

                done();
            });
            it('should provide todo description input label with Description value', async (done) => {
                expect(await todo.getDescriptionInputLabel().isPresent()).toBe(true);
                expect(await todo.getDescriptionInputLabelText()).toBe('Description');

                done();
            });
            it('should provide auto-populated todo description input', async (done) => {
                expect(await todo.getDescriptionInput().isPresent()).toBe(true);
                expect(await todo.getDescriptionInputValue()).toBe(description);

                done();
            });
        });
    });
});