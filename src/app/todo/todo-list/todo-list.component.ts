import { Component, OnInit } from '@angular/core';

import { TodoService } from '../services/todo.service';
import { Todo } from '../services/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {

  constructor(private service: TodoService) { }

  todos: Todo[];

  ngOnInit() {
    this.service.all().then(todos => this.todos = todos);
  }

}
