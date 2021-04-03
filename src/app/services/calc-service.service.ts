import { Injectable } from '@angular/core';

@Injectable()
export class CalcServiceService {

  constructor() { }
  public add(...params:number[]):number{
    let _result=0;
    for (let val of params) {
      _result+=val;
    }
    return _result;
  }
}
