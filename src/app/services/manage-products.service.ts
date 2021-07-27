import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageProductsService {

  constructor(    private http: HttpClient  
    ) { }
  getProductsData (): any {
    return this.http.get('http://localhost:8081/api/v1/products/productsList');
  }
}
