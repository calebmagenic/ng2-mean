import { TodoList } from './todo-list.po';
import { TodoStateMenu } from './todo-state-menu.po';

describe('Todo State Menu', () => {
    let page: TodoList;
    let menu: TodoStateMenu;

    beforeEach(async (done) => {
        page = new TodoList();
        menu = page.getTodoStateMenu();

        await page.navigateTo();

        done();
    });

    it("should provide container", async (done) => {
        expect(await menu.getContainer().isPresent()).toBe(true);
        done();
    });

    it("should provide active button", async (done) => {
        expect(await menu.getActiveButton().isPresent()).toBe(true);
        done();
    });

    it("should provide completed button", async (done) => {
        expect(await menu.getCompletedButton().isPresent()).toBe(true);
        done();
    });

    it("should provide add button", async (done) => {
        expect(await menu.getAddButton().isPresent()).toBe(true);
        done();
    });

    describe('Active Menu Item', () => {
        it('should have Active text', async (done) => {
            expect(await menu.getActiveButtonText()).toBe('Active');
            done();
        });
        it('should be styled as todo-state-active', async (done) => {
            let classNames = await menu.getActiveButtonClass();
            let classes = classNames.split(' ');

            expect(classes.length).toBeGreaterThan(0);
            expect(classes[0]).toBe('todo-state-active');

            done();
        });
        it('should be selected by default', async (done) => {
            let classNames = await menu.getActiveButtonClass();
            let classes = classNames.split(' ');

            expect(classes.length).toBe(2);
            expect(classes[1]).toBe('todo-state-selected');

            done();
        });
        it('should become active when clicked', async (done) => {
            //since Active is selected by default, select Completed first
            await menu.clickCompletedButton();
            await menu.clickActiveButton();

            let classNames = await menu.getActiveButtonClass();
            let classes = classNames.split(' ');

            expect(classes.length).toBe(2);
            expect(classes[1]).toBe('todo-state-selected');

            done();
        });
        it('should deactive Completed button when clicked', async (done) => {
            //since Active is selected by default, select Completed first
            await menu.clickCompletedButton();
            await menu.clickActiveButton();

            let classNames = await menu.getCompletedButtonClass();
            let classes = classNames.split(' ');

            expect(classes.length).toBe(1);
            expect(classNames).toBe('todo-state-completed');

            done();
        });
    });

    describe('Completed Menu Item', () => {
        it('should have Completed text', async (done) => {
            expect(await menu.getCompletedButtonText()).toBe('Completed');
            done();
        });
        it('should be styled as todo-state-completed', async (done) => {
            let classNames = await menu.getCompletedButtonClass();
            let classes = classNames.split(' ');

            expect(classes.length).toBeGreaterThan(0);
            expect(classes[0]).toBe('todo-state-completed');

            done();
        });
        it('should not be active by default', async (done) => {
            expect(await menu.getCompletedButtonClass()).toBe('todo-state-completed');
            done();
        });
        it('should become active when clicked', async (done) => {
            await menu.clickCompletedButton();

            let classNames = await menu.getCompletedButtonClass()
            let classes = classNames.split(' ');

            expect(classes.length).toBe(2);
            expect(classes[1]).toBe('todo-state-selected');

            done();
        });
        it('should deactive Active button when clicked', async (done) => {
            await menu.clickCompletedButton();

            let classNames = await menu.getActiveButtonClass();
            let classes = classNames.split(' ');

            expect(classes.length).toBe(1);
            expect(classNames).toBe('todo-state-active');

            done();
        });
    });

    describe('Add Menu Item', () => {
        it('should have add text', async (done) => {
            expect(await menu.getAddButtonText()).toBe('+ New');
            done();
        });
        it('should be styled as todo-add', async (done) => {
            let classNames = await menu.getAddButtonClass();
            let classes = classNames.split(' ');

            expect(classes.length).toBeGreaterThan(0);
            expect(classes[0]).toBe('todo-add');

            done();
        });
        it('should not be active by default', async (done) => {
            expect(await menu.getAddButtonClass()).toBe('todo-add');
            done();
        });
        it('should add new item when clicked', async (done) => {
            await page.removeAllTodos();
            await menu.clickAddButton();

            let items = await page.getTodoList();

            expect(items.length).toBe(1);
            expect(items[0]).not.toBeNull();

            done();
        });
    });
});