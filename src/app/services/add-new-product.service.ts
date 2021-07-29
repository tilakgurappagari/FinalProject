import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddNewProductService {

  public responseData;
  constructor(   
      public http: HttpClient 
    ) { }
  public addProductData(productsFormData : any){
    return   this.http.post('http://localhost:8081/api/v1/products/addProduct', productsFormData);
  }}
