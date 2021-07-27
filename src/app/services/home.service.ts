import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(    private http: HttpClient  
    ) { }
  getProductsData (): any {
    return this.http.get('http://localhost:8081/api/v1/products/productsList');
  }
}
