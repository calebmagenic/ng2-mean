import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams, RequestMethod } from '@angular/http';

import { HttpService } from '../../core/http/http.service';
import { HttpServiceConfig } from '../../core/http/http.service.config';

import { Todo } from './todo';

@Injectable()
export class TodoService extends HttpService {

  constructor(private client: Http) {
    super(client, {
      baseUrl: "http://localhost:3000/api/",
      controller: "todo",
      headers: new Headers({'Content-Type': 'application/json'})
    });
  }

  all(): Promise<Todo[]> {
    return this.get<Todo[]>("");
  }

  item(todoId: string): Promise<Todo> {
    var params = this.getParams(todoId);
    return this.get<Todo>(todoId);
  }

  save(todo: Todo): Promise<Todo[]> {
    if(todo._id) {
      var params = this.getParams(todo._id);
      return this.put<Todo[], Todo>(todo._id, todo);
    } else {
      return this.post<Todo[], Todo>("", todo);
    } 
  }

  remove(todoId: string): Promise<Todo[]> {
    var params = this.getParams(todoId);
    return this.delete(todoId);
  }

  private getParams(todoId: string): URLSearchParams {
    var params = new URLSearchParams();
    params.set('id', todoId);
    return params;
  }
}
