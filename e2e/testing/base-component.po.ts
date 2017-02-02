import { browser, element, by, promise, ElementFinder, ElementArrayFinder } from 'protractor';

import { BaseObject } from './base-object.po';

export class BaseComponent extends BaseObject<BaseComponent> {
    private self: ElementFinder;

    constructor(private root: string, container?: ElementFinder) {
        super(BaseComponent);

        if(container) {
            this.self = container;
        } else {
            this.self = null;
        }
    }

    protected css(css: string) {
        return by.css(css);
    }

    protected get(css: string, from?: ElementFinder): ElementFinder {
        if(from) {
            return from.element(this.css(css));
        }

        return this.self ? this.self.element(this.css(css)) : element(this.css(css));
    }

    protected getAll(css: string, from?: ElementFinder): ElementArrayFinder {
        if(from) {
            from.all(this.css(css));
        }

        return this.self ? this.self.all(this.css(css)) : element.all(this.css(css));
    }

    getContainer(): ElementFinder {
        return this.get(this.root);
    }

    getClass(from: ElementFinder): promise.Promise<string> {
        return from.getAttribute("class");
    }

    getValue(from: ElementFinder): promise.Promise<string> {
        return from.getAttribute("value");
    }

    getName(from: ElementFinder): promise.Promise<string> {
        return from.getAttribute("name");
    }

    getBinding(name: string, from: ElementFinder): promise.Promise<string> {
        return from.getAttribute(`ng-reflect-${name}`);
    }

    getModelBinding(from: ElementFinder): promise.Promise<string> {
        return this.getBinding("model", from);
    }

    getText(from: ElementFinder): promise.Promise<string> {
        return from.getText().then(value => {
            return value ? value.trim() : value;
        });
    }
}