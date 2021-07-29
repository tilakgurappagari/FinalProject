import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public ordersData : any = [];
  currentUser: any;
  currentUserSubscription: Subscription;
  firstName: any;
  lastName: any;
  phone: any;
  email: any;
  //...............................
  public enable: any = null;
  public isSeeDetails : boolean= false;
  public buttonValue: String="See Details";
  //..................................
  public orderIdDetail: any;
  public emailDetail: any;
  public orderedOnDetail: any;
  public productNameDetail: any;

  constructor(public ordersService: OrdersService, public authenticationService: AuthenticationService) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
      this.email=this.currentUser.user.email;    
         });

   }

   public seeDetails(indexValue, orderData){
     if(this.isSeeDetails==false){
       this.enable=indexValue;
       this.isSeeDetails=true;
       this.buttonValue = "Hide Details";
      this.emailDetail=orderData.email;
      this.orderIdDetail = orderData._id;
      this.productNameDetail = orderData.productName;
      this.orderedOnDetail = orderData.orderedOn;
     }
     else{
      this.enable = null;
      this.isSeeDetails=false;
      this.buttonValue="See Details";
     }
   }

  ngOnInit(): void {


    this.ordersService.getOrdersData().subscribe((data:any)=>{
        for(let index=0; index<data.length; index++){
          if(data[index].email.toLowerCase() == this.email.toLowerCase()){
            this.ordersData.push(data[index]);
          }
        }
    });

}

}
