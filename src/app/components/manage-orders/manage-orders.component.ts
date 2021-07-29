import { Component, OnInit } from '@angular/core';
import { ManageOrdersService } from 'src/app/services/manage-orders.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  public ordersData: any;
  constructor(public manageOrderService: ManageOrdersService) { }

  ngOnInit(): void {
    this.manageOrderService.getOrdersData().subscribe((data:any)=>{
        this.ordersData = data;
        console.log(this.ordersData);

    });

}

}
