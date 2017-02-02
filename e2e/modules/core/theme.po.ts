import { browser, element, by, promise, ElementFinder, ElementArrayFinder  } from 'protractor';

import { BaseComponent } from '../../testing/base-component.po';

export class AppTheme extends BaseComponent {
    constructor() {
        super('.app-theme');
    }

    getThemeSelector(): ElementFinder {
        return this.get('.theme-selector', this.getContainer());
    }

    getThemeSelectorName(): promise.Promise<string> {
        return this.getName(this.getThemeSelector());
    }

    getThemeSelectorBinding(): promise.Promise<string> {
        return this.getBinding("name", this.getThemeSelector());
    }

    getThemeSelectorValueBinding(): promise.Promise<string> {
        return this.getModelBinding(this.getThemeSelector());
    }

    getThemeOptions(): ElementArrayFinder {
        return this.getAll('option', this.getThemeSelector());
    }

    getThemeOption(index: number): ElementFinder {
        return this.getThemeOptions().get(index);
    }

    getThemeOptionValue(index: number): promise.Promise<string> {
        return this.getValue(this.getThemeOption(index));
    }

    getThemeOptionBinding(index: number): promise.Promise<string> {
        return this.getBinding('value', this.getThemeOption(index));
    }

    getThemeOptionText(index: number): promise.Promise<string> {
        return this.getText(this.getThemeOption(index));
    }

    async getNewBindingValue(index: number) {
        await this.selectByIndex(index);

        return await this.getThemeSelectorValueBinding();
    }

    async selectByIndex(index: number) {
        await this.getThemeSelector().click();

        return await this.getThemeOption(index).click();
    }
}