import { TodoList } from './todo-list.po';
import { TodoStateMenu } from './todo-state-menu.po';

describe('Todo State Menu', () => {
    let page: TodoList;
    let menu: TodoStateMenu;

    beforeEach(() => {
        page = new TodoList();
        menu = page.getTodoStateMenu();
    });

    it("should provide container", () => {
        page.navigateTo();
        expect(menu.getContainer().isPresent()).toBe(true);
    });

    it("should provide active button", () => {
        page.navigateTo();
        expect(menu.getActiveButton().isPresent()).toBe(true);
    });

    it("should provide completed button", () => {
        page.navigateTo();
        expect(menu.getCompletedButton().isPresent()).toBe(true);
    });

    it("should provide add button", () => {
        page.navigateTo();
        expect(menu.getAddButton().isPresent()).toBe(true);
    });

    describe('Active Menu Item', () => {
        it('should have Active text', () => {
            page.navigateTo();
            menu.getActiveButtonText().then(text => {
                expect(text).toBe('Active');
            });
        });
        it('should be styled as todo-state-active', () => {
            page.navigateTo();
            menu.getActiveButtonClass().then(classNames => {
                let classes = classNames.split(' ');
                expect(classes.length).toBeGreaterThan(0);
                expect(classes[0]).toBe('todo-state-active');
            });
        });
        it('should be selected by default', () => {
            page.navigateTo();
            menu.getActiveButtonClass().then(classNames => {
                let classes = classNames.split(' ');
                expect(classes.length).toBe(2);
                expect(classes[1]).toBe('todo-state-selected');
            });
        });
        it('should become active when clicked', () => {
            page.navigateTo();
            //since Active is selected by default, select Completed first
            menu.clickCompletedButton().then(() => {
                menu.clickActiveButton().then(() => {
                    menu.getActiveButtonClass().then(classNames => {
                        let classes = classNames.split(' ');
                        expect(classes.length).toBe(2);
                        expect(classes[1]).toBe('todo-state-selected');
                    });
                });
            });
        });
        it('should deactive Completed button when clicked', () => {
            page.navigateTo();
            //since Active is selected by default, select Completed first
            menu.clickCompletedButton().then(() => {
                menu.clickActiveButton().then(() => {
                    menu.getCompletedButtonClass().then(classNames => {
                        let classes = classNames.split(' ');
                        expect(classes.length).toBe(1);
                        expect(classNames).toBe('todo-state-completed');
                    });
                });
            });
        });
    });

    describe('Completed Menu Item', () => {
        it('should have Completed text', () => {
            page.navigateTo();
            menu.getCompletedButtonText().then(text => {
                expect(text).toBe('Completed');
            });
        });
        it('should be styled as todo-state-completed', () => {
            page.navigateTo();
            menu.getCompletedButtonClass().then(classNames => {
                let classes = classNames.split(' ');
                expect(classes.length).toBeGreaterThan(0);
                expect(classes[0]).toBe('todo-state-completed');
            });
        });
        it('should not be active by default', () => {
            page.navigateTo();
            menu.getCompletedButtonClass().then(classNames => {
                expect(classNames).toBe('todo-state-completed');
            });
        });
        it('should become active when clicked', () => {
            page.navigateTo();
            menu.clickCompletedButton().then(() => {
                menu.getCompletedButtonClass().then(classNames => {
                    let classes = classNames.split(' ');
                    expect(classes.length).toBe(2);
                    expect(classes[1]).toBe('todo-state-selected');
                });
            });
        });
        it('should deactive Active button when clicked', () => {
            page.navigateTo();
            menu.clickCompletedButton().then(() => {
                menu.getActiveButtonClass().then(classNames => {
                    let classes = classNames.split(' ');
                    expect(classes.length).toBe(1);
                    expect(classNames).toBe('todo-state-active');
                });
            });
        });
    });

    describe('Add Menu Item', () => {
        it('should have add text', () => {
            page.navigateTo();
            menu.getAddButtonText().then(text => {
                expect(text).toBe('+ New');
            });
        });
        it('should be styled as todo-add', () => {
            page.navigateTo();
            menu.getAddButtonClass().then(classNames => {
                let classes = classNames.split(' ');
                expect(classes.length).toBeGreaterThan(0);
                expect(classes[0]).toBe('todo-add');
            });
        });
        it('should not be active by default', () => {
            page.navigateTo();
            menu.getAddButtonClass().then(classNames => {
                expect(classNames).toBe('todo-add');
            });
        });
        it('should add new item when clicked', () => {
            page.navigateTo();
            page.removeAllTodos().then(() => {
                menu.clickAddButton().then(() => {
                    page.getTodoList().then(items => {
                        expect(items.length).toBe(1);
                        let item = items[0];
                        expect(item).not.toBeNull();
                    });
                });
            });
        });
    });
});