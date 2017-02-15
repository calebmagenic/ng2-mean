/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';

import { TodoService } from '../services/todo.service';
import { Todo } from '../services/todo';

import { TodoComponent } from '../todo/todo.component';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { TodoStateMenuComponent } from '../todo-state-menu/todo-state-menu.component';
import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let service: TodoService;
  let todos: Array<Todo> = new Array<Todo>();
  let allSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ TodoListComponent, TodoStateMenuComponent, TodoDetailComponent, TodoComponent ],
      providers: [
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          deps: [ MockBackend, BaseRequestOptions ],
          useFactory: (backend, options) => { return new Http(backend, options); }
        },
        TodoService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    todos.push(
      new Todo("id1", "text1", "desc1", false),
      new Todo("id2", "text2", "desc2", true)
    );

    service = fixture.debugElement.injector.get(TodoService);
    allSpy = spyOn(service, 'all')
      .and.returnValue(Promise.resolve(todos));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
