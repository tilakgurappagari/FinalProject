import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(public http: HttpClient) { }
  public addOrder(orderFormData: any){
    return   this.http.post('http://localhost:8081/api/v1/orders/addOrder', orderFormData);

  }


}
