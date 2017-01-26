import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoService } from '../services/todo.service';
import { Todo } from '../services/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.less']
})
export class TodoDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: TodoService) { }

  todo: Todo;

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.service.item(id).then(todo => this.todo = todo);
  }

}
