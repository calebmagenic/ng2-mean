import { TodoList } from './todo-list.po';

describe('Todo List', () => {
    let page: TodoList;

    beforeEach(() => {
        page = new TodoList();
    });

    it('should provide a container', () => {
        page.navigateTo();
        expect(page.getContainer().isPresent()).toBe(true);
    });

    it('should provide a list container', () => {
        page.navigateTo();
        expect(page.getTodoListContainer().isPresent()).toBe(true);
    });

    it('should provide a list group', () => {
        page.navigateTo();
        expect(page.getTodoListGroup().isPresent()).toBe(true);
    });

    it('should provide a detail pane', () => {
        page.navigateTo();
        expect(page.getTodoDetailPane().isPresent()).toBe(true);
    });
});