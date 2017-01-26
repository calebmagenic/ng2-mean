import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../shared/shared.module';

import { TodoService } from './services/todo.service';
import { Todo } from './services/todo';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TodoRoutingModule
  ],
  declarations: [TodoComponent, TodoListComponent, TodoDetailComponent],
  exports: [ ],
  providers: [ TodoService ]
})
export class TodoModule { }
