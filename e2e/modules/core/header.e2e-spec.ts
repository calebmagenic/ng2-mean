import { TodoList } from '../todo/todo-list.po';
import { Header } from './header.po';

describe('Core Header', () => {
    let page: TodoList;
    let header: Header;

    beforeEach(() => {
        page = new TodoList();
        header = new Header();
    });

    it('should provide a container', () => {
        page.navigateTo();
        expect(header.getContainer().isPresent()).toBe(true);
    });

    it('should provide a header', () => {
        page.navigateTo();
        expect(header.getHeader().isPresent()).toBe(true);
    });

    it('should contain default heading text', () => {
        page.navigateTo();
        header.getHeaderText().then(text => {
            expect(text).toBe('NG2 MEAN: TODO');
        });
    });
});