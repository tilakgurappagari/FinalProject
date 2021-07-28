import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public productsData : any =[];
  public categoryName : any;
  constructor(public activatedRoute:ActivatedRoute, public categoriesService : CategoriesService, public router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params)=>{
      this.categoryName = params.get('categoryName');
      console.log(this.categoryName);
    })    

    this.categoriesService.getProductsDataByCategory().subscribe((data:any)=>{
      for(let index=0; index<data.length; index++){
        if(data[index].category.toLowerCase() == this.categoryName.toLowerCase()){
          this.productsData.push(data[index]);
        }
      }

      console.log(this.productsData);

    });
  }

  public navigateToProduct(product: any){
    // console.log(product);
     this.router.navigate(['/products'], 
       {
         queryParams:{
           productId:  product.productId,
           productName: product.productName,
           productImage: product.productImage,
           category: product.category,
           price: product.price,
           discountedPrice: product.discountedPrice,
           productDescription: product.productDescription,
           isTopProduct: product.isTopProduct,
   
         }
       }
     );

}
}
