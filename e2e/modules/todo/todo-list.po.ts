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

    removeAllTodos() {
        // get all todo items
        return this.getTodoList().then(items => {
            let promises: promise.Promise<any>[] = [];
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

    addNewTodo(itemText: string = 'New item', itemDescription: string = 'New item description') {
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
}