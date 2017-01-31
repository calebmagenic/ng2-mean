import { browser, element, by, promise, ElementFinder } from 'protractor';

import { TodoItem } from './todo.po';
import { TodoDetail } from './todo-detail.po';
import { TodoStateMenu } from './todo-state-menu.po';

export class TodoList {
    constructor() {
        this.todoMenu = new TodoStateMenu();
        this.todoDetail = new TodoDetail();
        this.todoList = [];
    }

    private todoMenu: TodoStateMenu;
    private todoDetail: TodoDetail;
    private todoList: TodoItem[];

    navigateTo() {
        return browser.get('/list');
    }

    getContainer() {
        return element(by.css('.todo-list-container'));
    }

    getTodoListContainer() {
        return this.getContainer().element(by.css('.todo-list'));
    }

    getTodoListGroup() {
        return this.getTodoListContainer().element(by.css('.todo-list-group'));
    }

    getTodoDetailPane() {
        return this.getContainer().element(by.css('.todo-detail-pane'));
    }

    getTodoStateMenu(): TodoStateMenu {
        return this.todoMenu;
    }

    getTodoDetail(): TodoDetail {
        return this.todoDetail;
    }

    getTodoList() {
        return TodoItem.getList();
    }

    getTodoItem(index: number) {
        return this.getTodoList().then((list: TodoItem[]) => {
            return list.length && list.length > index ? list[index] : null;
        });
    }

    removeAllTodos(): promise.Promise<void[]> {
        // get all todo items
        return this.getTodoList().then(items => {
            let promises: Array<promise.Promise<void>> = new Array<promise.Promise<void>>();
            // make sure items exist
            if(items.length) {
                // click the Delete button on each item
                items.forEach(item => {
                    promises.push(item.clickDeleteButton());
                });
            }

            return promise.all(promises);
        });
    }

    saveNewTodo(itemText: string = 'New item', itemDescription: string = 'New item description') {
        // add new item to list
        this.todoMenu.clickAddButton();
        // get new item
        return this.getTodoItem(0).then(item => {
            // click edit
            item.clickEditButton();
            // enter text
            item.setTextInput(itemText);
            // enter description
            item.setDescriptionInput(itemDescription);
            // click save
            item.clickSaveButton();
        });
    }

    getNewTodo(): promise.Promise<TodoItem> {
        // add new item to list
        this.todoMenu.clickAddButton();
        // get new item
        return this.getTodoItem(0).then(item => {
            return item;
        });
    }
}