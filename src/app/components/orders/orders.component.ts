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


  constructor(public ordersService: OrdersService, public authenticationService: AuthenticationService) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
      //console.log(this.currentUser.user.firstName);
      this.email=this.currentUser.user.email;  
      console.log(this.currentUser.user.email);
  
         });

   }

  ngOnInit(): void {


    this.ordersService.getOrdersData().subscribe((data:any)=>{
        for(let index=0; index<data.length; index++){
          if(data[index].email.toLowerCase() == this.email.toLowerCase()){
            this.ordersData.push(data[index]);
          }
        }
  
        console.log(this.ordersData);

    });

}

}
