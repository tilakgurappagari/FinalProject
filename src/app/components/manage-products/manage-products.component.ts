import { Component, OnInit } from '@angular/core';
import { ManageProductsService } from 'src/app/services/manage-products.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  public productsData : any;
  constructor(public manageProductsService: ManageProductsService) { }

  ngOnInit(): void {
    this.manageProductsService.getProductsData().subscribe((data:any)=>{
      this.productsData = data;
      // console.log(this.productsData);

    });

}
}
