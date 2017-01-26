import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { TodoService } from './services/todo.service';
import { Todo } from './services/todo';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoStateMenuComponent } from './todo-state-menu/todo-state-menu.component';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    TodoRoutingModule
  ],
  declarations: [TodoComponent, TodoListComponent, TodoDetailComponent, TodoStateMenuComponent],
  exports: [ ],
  providers: [ TodoService ]
})
export class TodoModule { }
