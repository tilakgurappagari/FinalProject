import { Component, OnInit } from '@angular/core';
import { ManageProductsService } from 'src/app/services/manage-products.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  public productsData : any;
  public responseData: any;
  constructor(public manageProductsService: ManageProductsService) { }

  ngOnInit(): void {
    this.manageProductsService.getProductsData().subscribe((data:any)=>{
      this.productsData = data;

    });

}

  public deleteProduct(productData: any){
      console.log(productData._id);
      this.manageProductsService.deleteProduct(productData._id).subscribe((data:any)=>{
        this.responseData = data;
        this.ngOnInit();
      

    });

  }

}
