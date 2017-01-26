import { Component, OnInit, Input } from '@angular/core';
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

  @Input()
  todo: Todo;

  @Input()
  header: String;

  ngOnInit() {
  }

  

}
