import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient
  ) {}

  private formatErrors(error: any) {
    console.log("error =>"+ error.error);
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body),
      { headers: headers }
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body),
      { headers: headers }
    ).pipe(catchError(this.formatErrors));
  }

  delete(path:string): Observable<any> {
    return this.http.delete(
      `${environment.apiUrl}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}
