import { TodoList } from '../todo/todo-list.po';
import { Header } from './header.po';

describe('Core Header', () => {
    let page: TodoList;
    let header: Header;

    beforeEach(() => {
        page = new TodoList();
        header = new Header();
    });

    it('should provide a container', async (done) => {
        page.navigateTo();
        expect(await header.getContainer().isPresent()).toBe(true);
        done();
    });

    it('should provide a header', async (done) => {
        page.navigateTo();
        expect(await header.getHeader().isPresent()).toBe(true);
        done();
    });

    it('should contain default heading text', async (done) => {
        page.navigateTo();
        expect(await header.getHeaderText()).toBe('NG2 MEAN: TODO');
        done();
    });
});