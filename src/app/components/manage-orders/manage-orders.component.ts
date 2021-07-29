import { Component, OnInit } from '@angular/core';
import { ManageOrdersService } from 'src/app/services/manage-orders.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  public ordersData: any;

  //...............................
  public enable: any = null;
  public isSeeDetails : boolean= false;
  public buttonValue: String="See Details";
  //..................................
  public orderIdDetail: any;
  public emailDetail: any;
  public orderedOnDetail: any;
  public productNameDetail: any;

  constructor(public manageOrderService: ManageOrdersService) { }

  ngOnInit(): void {
    this.manageOrderService.getOrdersData().subscribe((data:any)=>{
        this.ordersData = data;

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




}
