import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Observable} from 'rxjs/Rx';
import {Bill} from'./bill';

@Injectable()
export class AppService {
  private apiServer ="http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  

  create(data):Observable<Bill> {
    return this.httpClient.post<Bill>(this.apiServer + '/bills/', JSON.stringify(data), this.httpOptions)
    // .pipe(
    //   catchError(this.errorHandler)
    // )
  }  
  getById(id):Observable<Bill>{
    return this.httpClient.get<Bill>(this.apiServer + '/bills/' + id)
    // .pipe(
    //   catchError(this.errorHandler)
    // )
  }

  getAll():Observable<Bill[]>{
    return this.httpClient.get<Bill[]>(this.apiServer + '/bills/')
    // .pipe(
    //   catchError(this.errorHandler)
    // )
  }

  update(id, bill):Observable<Bill> {
    return this.httpClient.put<Bill>(this.apiServer + '/bills/' + id, JSON.stringify(bill), this.httpOptions)
    // .pipe(
    //   catchError(this.errorHandler)
    //)
  }

  delete(id){
    return this.httpClient.delete(this.apiServer + '/bills/' + id, this.httpOptions)
    // .pipe(
    //   catchError(this.errorHandler)
    // )
  }
  errorHandler(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
    //  return throwError(errorMessage);
  }
}


