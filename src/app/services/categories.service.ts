import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(public http: HttpClient) { }
  getProductsDataByCategory (): any {
    return this.http.get('http://localhost:8081/api/v1/products/productsList');
  }
}
