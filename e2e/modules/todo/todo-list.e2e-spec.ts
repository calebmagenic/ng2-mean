import { TodoList } from './todo-list.po';

describe('Todo List', () => {
    let page: TodoList;

    beforeEach(async (done) => {
        page = new TodoList();

        await page.navigateTo();

        done();
    });

    it('should provide a container', async (done) => {
        expect(await page.getContainer().isPresent()).toBe(true);
        done();
    });

    it('should provide a list container', async (done) => {
        expect(await page.getTodoListContainer().isPresent()).toBe(true);
        done();
    });

    it('should provide a list group', async (done) => {
        expect(await page.getTodoListGroup().isPresent()).toBe(true);
        done();
    });

    it('should provide a detail pane', async (done) => {
        expect(await page.getTodoDetailPane().isPresent()).toBe(true);
        done();
    });
});