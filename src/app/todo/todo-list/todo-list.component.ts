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
  activeTodos: Todo[];
  completedTodos: Todo[];
  showActive: Boolean;
  selectedTodo: Todo;

  ngOnInit() {
    this.service.all().then(todos => this.todos = todos)
      .then(todos => this.filterResults(todos));
  }

  filterResults(todos: Todo[]) {
    this.activeTodos = todos.filter((todo: Todo) => !todo.done);
    this.completedTodos = todos.filter((todo: Todo) => todo.done);

    this.showActive = true;
    this.setSelectedItem();
  }

  setSelectedItem() {
    this.selectedTodo = (this.activeTodos && this.activeTodos.length) ? this.activeTodos[0] : null;
  }

  onToggle(showActive: Boolean) {
    this.showActive = showActive;
  }

  onSelect(todo: Todo) {
    this.selectedTodo = todo;
  }

}
