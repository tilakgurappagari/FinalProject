import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HomeService } from 'src/app/services/home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public productsData : any = [];
  currentUser: any;
  newPrice: any;
  public categories: any= [
    {
    categoryName: 'mobile',
    categoryImage: 'http://via.placeholder.com/480x240'
  },
  {
    categoryName: 'laptop',
    categoryImage: 'http://via.placeholder.com/480x240'
  }, {
    categoryName: 'other',
    categoryImage: 'http://via.placeholder.com/480x240'
  },
]
  currentUserSubscription: Subscription;
  constructor(public homeService: HomeService, public router: Router, public authenticationService: AuthenticationService) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    
         });
   }

  ngOnInit(): void {
    this.homeService.getProductsData().subscribe((data:any)=>{
      for(let index=0; index<data.length; index++){
        if(data[index].topSellingProduct === true){
          this.productsData.push(data[index]);
        }
      }

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
  //console.log(product);
}
public navigateToCategory(categoryName:any){
  this.router.navigate(['/categories'],{
    queryParams:{
      categoryName: categoryName
    }
  })
}

}
