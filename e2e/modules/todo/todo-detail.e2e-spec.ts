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

    it("should provide a container", () => {
        page.navigateTo();
        expect(detail.getContainer().isPresent()).toBe(true);
    });

    it("should provide a header", () => {
        page.navigateTo();
        expect(detail.getHeader().isPresent()).toBe(true);
    });

    it("should provide a description", () => {
        page.navigateTo();
        expect(detail.getDescriptionContainer().isPresent()).toBe(true);
    });

    it("should provide description text", () => {
        page.navigateTo();
        expect(detail.getDescription().isPresent()).toBe(true);
    });

    it("should set the header text", () => {
        page.navigateTo();
        expect(detail.getHeaderText()).toBe(detailHeader);
    });

    it('should set default description text', (done) => {
        page.navigateTo();
        page.removeAllTodos().then(() => {
            detail.getDescriptionText().then(text => {
                expect(text).toBe(defaultDescription);
                done();
            });
        });
    });

    describe('with at least one item', () => {
        beforeEach(done => {
            menu = page.getTodoStateMenu();
            page.removeAllTodos().then(() => {
                page.addNewTodo(text, description).then(() => {
                    done();
                });
            });
        });

        it("should set the description text", () => {
            page.navigateTo();
            expect(detail.getDescriptionText()).toBe(description);
        });
    });
});