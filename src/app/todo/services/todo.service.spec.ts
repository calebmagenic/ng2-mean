/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';

import { TodoService } from './todo.service';

describe('Service: Todo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          deps: [ MockBackend, BaseRequestOptions ],
          useFactory: (backend, options) => { return new Http(backend, options); }
        },
        TodoService
      ]
    })
  });

  it('should ...', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));
});
