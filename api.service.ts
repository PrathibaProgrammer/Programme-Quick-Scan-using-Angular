import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  createData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/master/updatemaster_programme`, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  createChildData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/master//updatechild_programme`, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/master/getmaster_programme`)
      .pipe(
        catchError(this.handleError)
      );
  }
  updateData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/master/updatechild_programme/${data.childDepartmentID}`, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
