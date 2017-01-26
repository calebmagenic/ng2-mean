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
    if(this.showActive) {
      this.selectedTodo = (this.activeTodos && this.activeTodos.length) ? this.activeTodos[0] : null;
    } else {
      this.selectedTodo = (this.completedTodos && this.completedTodos.length) ? this.completedTodos[0] : null;
    }
  }

  onToggle(showActive: Boolean) {
    this.showActive = showActive;
    this.setSelectedItem();
  }

  onSelect(todo: Todo) {
    this.selectedTodo = todo;
  }

  onCreate() {
    this.todos.push(new Todo(null, "New Item", "A new item", false));
    this.filterResults(this.todos);
  }

  onDelete(todo: Todo) {
    this.service.remove(todo._id)
      .then(todos => this.todos = todos)
      .then(todos => this.filterResults(todos))
      .catch(err => this.handleDeleteError(err));
  }

  onSave(todo: Todo) {
    this.service.save(todo)
      .then(todos => this.todos = todos)
      .then(todos => this.filterResults(todos))
      .catch(err => this.handleSaveError(err));
  }

  handleSaveError(reason: any) {
    console.log("Failed to save todo:");
    console.log(reason);
  }

  handleDeleteError(reason: any) {
    console.log("Failed to delete todo:");
    console.log(reason);
  }

}
