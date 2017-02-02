import { AppPage } from '../app/app.po';
import { AppTheme } from './theme.po';

describe('App Theme', () => {
    let page: AppPage;
    let appTheme: AppTheme;

    beforeAll(async (done) => {
        page = new AppPage();
        let header = page.getHeaderObject();
        appTheme = header.getAppThemeObject();

        await page.navigateTo();

        done();
    });

    it('should provide default structure', async (done) => {
        const expectedName = 'color';

        expect(await appTheme.getContainer().isPresent()).toBe(true);
        expect(await appTheme.getThemeSelector().isPresent()).toBe(true);
        expect(await appTheme.getThemeSelectorName()).toBe(expectedName);
        expect(await appTheme.getThemeOptions().count()).toBe(7);

        done();
    });

    it('should set initial binding', async (done) => {
        const expectedBinding = 'color';
        const expectedBindingValue = 'grey';

        expect(await appTheme.getThemeSelectorBinding()).toBe(expectedBinding);
        expect(await appTheme.getThemeSelectorValueBinding()).toBe(expectedBindingValue);

        done();
    });

    it('should set option bindings', async (done) => {
        expect(await appTheme.getThemeOptionBinding(0)).toBe('grey');
        expect(await appTheme.getThemeOptionBinding(1)).toBe('blue');
        expect(await appTheme.getThemeOptionBinding(2)).toBe('purple');
        expect(await appTheme.getThemeOptionBinding(3)).toBe('red');
        expect(await appTheme.getThemeOptionBinding(4)).toBe('brown');
        expect(await appTheme.getThemeOptionBinding(5)).toBe('orange');
        expect(await appTheme.getThemeOptionBinding(6)).toBe('green');

        done();
    });

    it('should set option values', async (done) => {
        expect(await appTheme.getThemeOptionValue(0)).toBe('grey');
        expect(await appTheme.getThemeOptionValue(1)).toBe('blue');
        expect(await appTheme.getThemeOptionValue(2)).toBe('purple');
        expect(await appTheme.getThemeOptionValue(3)).toBe('red');
        expect(await appTheme.getThemeOptionValue(4)).toBe('brown');
        expect(await appTheme.getThemeOptionValue(5)).toBe('orange');
        expect(await appTheme.getThemeOptionValue(6)).toBe('green');

        done();
    });

    it('should set option text', async (done) => {
        expect(await appTheme.getThemeOptionText(0)).toBe('grey');
        expect(await appTheme.getThemeOptionText(1)).toBe('blue');
        expect(await appTheme.getThemeOptionText(2)).toBe('purple');
        expect(await appTheme.getThemeOptionText(3)).toBe('red');
        expect(await appTheme.getThemeOptionText(4)).toBe('brown');
        expect(await appTheme.getThemeOptionText(5)).toBe('orange');
        expect(await appTheme.getThemeOptionText(6)).toBe('green');

        done();
    });

    describe('Theme Selector', () => {
        it('should set grey theme', async (done) => {
            let color: string = 'grey';
            expect(await appTheme.getNewBindingValue(0)).toBe(color);
            expect(await page.getContainerClass()).toBe(`app theme mono ${color}`);

            done();
        });
        it('should set blue theme', async (done) => {
            let color: string = 'blue';
            expect(await appTheme.getNewBindingValue(1)).toBe(color);
            expect(await page.getContainerClass()).toBe(`app theme mono ${color}`);

            done();
        });
        it('should set purple theme', async (done) => {
            let color: string = 'purple';
            expect(await appTheme.getNewBindingValue(2)).toBe(color);
            expect(await page.getContainerClass()).toBe(`app theme mono ${color}`);

            done();
        });
        it('should set red theme', async (done) => {
            let color: string = 'red';
            expect(await appTheme.getNewBindingValue(3)).toBe(color);
            expect(await page.getContainerClass()).toBe(`app theme mono ${color}`);

            done();
        });
        it('should set brown theme', async (done) => {
            let color: string = 'brown';
            expect(await appTheme.getNewBindingValue(4)).toBe(color);
            expect(await page.getContainerClass()).toBe(`app theme mono ${color}`);

            done();
        });
        it('should set orange theme', async (done) => {
            let color: string = 'orange';
            expect(await appTheme.getNewBindingValue(5)).toBe(color);
            expect(await page.getContainerClass()).toBe(`app theme mono ${color}`);

            done();
        });
        it('should set green theme', async (done) => {
            let color: string = 'green';
            expect(await appTheme.getNewBindingValue(6)).toBe(color);
            expect(await page.getContainerClass()).toBe(`app theme mono ${color}`);

            done();
        });
    });
});