import { TodoList } from '../todo/todo-list.po';
import { Header } from './header.po';

describe('Core Header', () => {
    let page: TodoList;
    let header: Header;

    beforeAll(async (done) => {
        page = new TodoList();
        header = new Header();

        await page.navigateTo();

        done();
    });

    it('should provide a container', async (done) => {
        expect(await header.getContainer().isPresent()).toBe(true);
        done();
    });

    it('should provide a header', async (done) => {
        expect(await header.getHeader().isPresent()).toBe(true);
        done();
    });

    it('should contain default heading text', async (done) => {
        expect(await header.getHeaderText()).toBe('NG2 MEAN: TODO');
        done();
    });

    it('should provide a header theme', async (done) => {
        expect(await header.getHeaderTheme().isPresent()).toBe(true);
        done();
    });

    it('should provide an app-theme', async (done) => {
        expect(await header.getAppTheme().isPresent()).toBe(true);
        done();
    });

    
});