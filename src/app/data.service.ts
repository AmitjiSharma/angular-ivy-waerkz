import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IEmployee } from './employee';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  public _url = '/test/api.json';

  getEmployees(): Observable<IEmployee[]> {
    return this.http
      .get<IEmployee[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(catchError(this.errorhandler));
  }
  errorhandler(error: HttpErrorResponse): any {
    return observableThrowError(error.message || 'Service Eror');
  }
}
