import { browser, element, by, promise, ElementFinder  } from 'protractor';

import { BaseComponent } from '../../testing/base-component.po';

import { AppTheme } from './theme.po';

export class Header extends BaseComponent {
    constructor() {
        super('.header');
    }

    getHeader(): ElementFinder {
        return this.get('.header-text', this.getContainer());
    }

    getHeaderText(): promise.Promise<string> {
        return this.getText(this.getHeader());
    }

    getHeaderTheme(): ElementFinder {
        return this.get('.header-theme', this.getContainer());
    }

    getAppTheme(): ElementFinder {
        return this.get('app-theme', this.getHeaderTheme());
    }

    getAppThemeObject(): AppTheme {
        return new AppTheme();
    }
}