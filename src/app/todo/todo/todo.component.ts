import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';

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
  previousTodo: Todo;

  @Output()
  onSelect = new EventEmitter<Todo>();
  @Output()
  onCancel = new EventEmitter<Todo>();
  selected: boolean;

  @Output()
  onSave = new EventEmitter<Todo>();

  editMode: Boolean = false;

  ngOnInit() {
  }

  select($event) {
    this.onSelect.emit(this.todo);
    this.selected = !this.selected;
    this.previousTodo = this.todo;
  }

  toggleMode(modeOnly: boolean) {
    if(this.editMode && !modeOnly) {
      this.onSave.emit(this.todo);
    }

    if(this.editMode && modeOnly) {
      this.onCancel.emit(this.previousTodo);
    }

    this.editMode = !this.editMode;
  }

}
