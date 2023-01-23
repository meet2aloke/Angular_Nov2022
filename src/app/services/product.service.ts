import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { 
  }
  public getEmpData(): Observable<any>{
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    return this._http.get('https://dummyjson.com/products');
  }
}
