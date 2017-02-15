import { Component, Input } from '@angular/core';

import { Todo } from '../services/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.less']
})
export class TodoDetailComponent {

  constructor() { }

  @Input()
  todo: Todo;

  @Input()
  header: String;

}
