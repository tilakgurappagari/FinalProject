import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productName: any;
  public productId: any;
public price: any;
public discountedPrice: any;
  public productDescription: any;
  public productImage: any;
  public isTopProduct: any;
  public category: any;
  public newPrice: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.activatedRoute.queryParamMap.subscribe((params)=>{
        this.productId = params.get('productId');
        this.productName = params.get('productName');
        this.price = params.get('price');
        this.discountedPrice=params.get('discountedPrice');
        this.productDescription = params.get('productDescription');
        this.productImage = params.get('productImage');
        this.isTopProduct = params.get('isTopProduct');
        this.category= params.get('category')

      })
      this.newPrice = this.price-this.discountedPrice;
  }

}
