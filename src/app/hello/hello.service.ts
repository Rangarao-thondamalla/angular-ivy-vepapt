import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './hello';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class HelloService {
  private _url: string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
