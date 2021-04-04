import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }
  path="https://raw.githubusercontent.com/ahmetcengiz06/shop.github.io/main/shop.json";
  getCategories():Observable<any>{
   return  this.http.get<any>(this.path).pipe(
     tap(data=>console.log(JSON.stringify(data.categories))),
     catchError(this.handleError)
   );
  }
  handleError(err:HttpErrorResponse){
    let _errorMessage="";
    if (err.error instanceof ErrorEvent) {
      _errorMessage="Bir Hata Oluştu "+err.error.message;
    }
    else{
      _errorMessage="Sistemsel Bir Hata";
    }
    return _errorMessage;
  }
}
