import { TodoList } from './todo-list.po';

describe('Todo List', () => {
    let page: TodoList;

    beforeEach(() => {
        page = new TodoList();
    });

    it('should provide a container', async (done) => {
        page.navigateTo();
        expect(await page.getContainer().isPresent()).toBe(true);
        done();
    });

    it('should provide a list container', async (done) => {
        page.navigateTo();
        expect(await page.getTodoListContainer().isPresent()).toBe(true);
        done();
    });

    it('should provide a list group', async (done) => {
        page.navigateTo();
        expect(await page.getTodoListGroup().isPresent()).toBe(true);
        done();
    });

    it('should provide a detail pane', async (done) => {
        page.navigateTo();
        expect(await page.getTodoDetailPane().isPresent()).toBe(true);
        done();
    });
});