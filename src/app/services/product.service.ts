import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }
  path="https://raw.githubusercontent.com/ahmetcengiz06/shop.github.io/main/shop.json";
  getProducts():Observable<any>{
    return this.http.get<any>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data.products))),//loglama için kullanılır
      catchError(this.handleError)//hata yı ele almak için kullanılır
    );
  }
  handleError(err:HttpErrorResponse) {
    let errorMessage='';
    if (err.error instanceof ErrorEvent) {
      errorMessage='Bir Hata Oluştu'+err.error.message;
    }
    else{
      errorMessage='Sistemsel bir hata';
    }
    return throwError(errorMessage);
  }
}
