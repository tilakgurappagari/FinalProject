import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  public responseData;
  constructor(   
      public http: HttpClient 
    ) { }
  public setData(userFormData : any){
    return   this.http.post('http://localhost:8081/api/v1/auth/register', userFormData);
  }

}
