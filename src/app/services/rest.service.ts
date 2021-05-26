import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';

export interface Options {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: any;
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

const httpOptions: Options = {
  headers: new HttpHeaders({'Content-Type': 'application/json', Accept: 'application/json'}),
  withCredentials: true,

  observe: 'response' as 'response',
  params: {}
};

@Injectable({providedIn: 'root'})
export class RestService {
  constructor(
    private http: HttpClient
  ) { }

  get = (url: string, params: any = {}, options: any = httpOptions) => {
    options = {
      ...options,
      params
    };

    return this.http.get(
      environment.apiUrl + url,
      options
    ).pipe(map((response) => {const resp = response as any as HttpResponse<any>; return resp.body; }));
  }

  post = (url: string, data: FormData|object|string|null = null, params: any = {}, options = httpOptions) => {
    options = {
      ...options,
      params
    };
    return this.http.post(
      environment.apiUrl + url,
      data,
      options
    ).pipe(map((response) => (response as any).body));
  }
}

export abstract class BackendUrlClass {
 backendUrl = environment.apiUrl.substr(0, environment.apiUrl.length - 1);
}
