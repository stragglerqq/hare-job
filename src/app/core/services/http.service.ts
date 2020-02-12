import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HttpOptions {
  // tslint:disable-next-line:no-any
  observe?: any | 'body' | 'response' | 'events';
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  headers?: HttpHeaders;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) {
  }

  get<T>(url: string, options: HttpOptions = {}): Observable<T> {
    return this.http.get<T>(this.getRequestUrl(url), options);
  }

  post<T>(url: string, body: T | Partial<T>, options: HttpOptions = {}): Observable<T> {
    return this.http.post<T>(this.getRequestUrl(url), body, options);
  }

  patch<T>(url: string, body: T | Partial<T>, options: HttpOptions = {}): Observable<T> {
    return this.http.patch<T>(this.getRequestUrl(url), body, options);
  }

  put<T>(url: string, body: T | Partial<T>, options: HttpOptions = {}): Observable<T> {
    return this.http.put<T>(this.getRequestUrl(url), body, options);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(this.getRequestUrl(url));
  }

  private getRequestUrl(path: string): string {
    return `${environment.apiUrl}/${path}`;
  }
}
