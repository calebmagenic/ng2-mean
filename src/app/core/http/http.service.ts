import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams, RequestMethod } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { HttpServiceConfig } from './http.service.config';

@Injectable()
export class HttpService {
    constructor(private http: Http, private config: HttpServiceConfig) {

    }

    protected get<TResponse>(action: string, params?: URLSearchParams): Promise<TResponse> {
        return this.getOrDelete<TResponse>(action, RequestMethod.Get, "get", params);
	}

	protected post<TResponse, TRequest>(action: string, body: any, params?: URLSearchParams): Promise<TResponse> {
        return this.postOrPut<TResponse, TRequest>(action, body, RequestMethod.Post, 'post', params);
    }

    protected put<TResponse, TRequest>(action: string, body: any, params?: URLSearchParams): Promise<TResponse> {
        return this.postOrPut<TResponse, TRequest>(action, body, RequestMethod.Put, 'put', params);
    }

    protected delete<TResponse>(action: string, params?: URLSearchParams): Promise<TResponse> {
        return this.getOrDelete<TResponse>(action, RequestMethod.Delete, "delete", params);
    }

    private getOrDelete<TResponse>(action: string, method: RequestMethod, methodString: string, params?: URLSearchParams): Promise<TResponse> {
        if (!action) {
            action = "";
        }

        var url = this.config.baseUrl + this.config.controller + '/' + action;

        var options = new RequestOptions({
            headers: this.config.headers,
            method: method,
            url: url,
            search: params
        });

        return this.http[methodString](url, options)
            .toPromise()
            .then(response => response.json())
            .then(json => <TResponse>json);
    }

    private postOrPut<TResponse, TRequest>(action: string, body: TRequest, method: RequestMethod, methodString: string, params?: URLSearchParams): Promise<TResponse> {
        var url = this.config.baseUrl + this.config.controller + '/' + action;
        
        var options = new RequestOptions({
            headers: this.config.headers,
            method: method,
            url: url,
            search: params,
            body: body
        });

        return this.http[methodString](url, body, options)
            .toPromise()
            .then(response => response.json())
            .then(json => {
                return <TResponse>json;
            });
    }
}
