import { TodoList } from './todo-list.po';
import { TodoDetail } from './todo-detail.po';
import { TodoStateMenu } from './todo-state-menu.po';

describe('Todo Detail', () => {
    let page: TodoList;
    let detail: TodoDetail;
    let menu: TodoStateMenu;
    let detailHeader: string = 'Details';
    let text: string = 'New test item';
    let description: string = 'New test item description';
    let defaultDescription: string = 'Please select or create a todo.';

    beforeEach(() => {
        page = new TodoList();
        detail = page.getTodoDetail();
    });

    it("should provide a container", async (done) => {
        page.navigateTo();
        expect(await detail.getContainer().isPresent()).toBe(true);
        done();
    });

    it("should provide a header", async (done) => {
        page.navigateTo();
        expect(await detail.getHeader().isPresent()).toBe(true);
        done();
    });

    it("should provide a description", async (done) => {
        page.navigateTo();
        expect(await detail.getDescriptionContainer().isPresent()).toBe(true);
        done();
    });

    it("should provide description text", async (done) => {
        page.navigateTo();
        expect(await detail.getDescription().isPresent()).toBe(true);
        done();
    });

    it("should set the header text", async (done) => {
        page.navigateTo();
        expect(await detail.getHeaderText()).toBe(detailHeader);
        done();
    });

    it('should set default description text', async (done) => {
        page.navigateTo();
        await page.removeAllTodos();

        let text = await detail.getDescriptionText();

        expect(text).toBe(defaultDescription);
        done();
    });

    describe('with at least one item', () => {
        beforeEach(async (done) => {
            menu = page.getTodoStateMenu();
            await page.removeAllTodos();
            await page.addNewTodo(text, description);
            done();
        });

        it("should set the description text", async (done) => {
            page.navigateTo();
            expect(await detail.getDescriptionText()).toBe(description);
            done();
        });
    });
});