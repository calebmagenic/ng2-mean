import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TodoService } from '../services/todo.service';
import { Todo } from '../services/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent implements OnInit {

  constructor() { }

  @Input()
  todo: Todo;

  @Output()
  onSelect = new EventEmitter<Todo>();

  ngOnInit() {
    
  }

  select($event) {
    this.onSelect.emit(this.todo);
  }

}
