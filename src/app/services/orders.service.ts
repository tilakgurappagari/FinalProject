import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(    private http: HttpClient  
    ) { }
  getOrdersData (): any {
    return this.http.get('http://localhost:8081/api/v1/orders/OrdersList');
  }
}
