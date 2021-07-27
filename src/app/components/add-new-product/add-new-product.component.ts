import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AddNewProductService } from 'src/app/services/add-new-product.service';
@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  public productsForm: FormGroup;
  public submitted: boolean = false;
  public responseData: any;
  constructor(private formBuilder: FormBuilder, public router:Router, public addNewProductService: AddNewProductService) { 

  }

  ngOnInit(): void {
    this.initializeUserForm();
  }
  public initializeUserForm(){
    this.productsForm = this.formBuilder.group({
      productId:  ['', Validators.required],
      productName:  ['', [Validators.required, Validators.maxLength(64)]],
      category:  ['', Validators.required],
      price: ['', [Validators.required]],
      discountedPrice:['',[Validators.required]],
      productImage:['',[Validators.required]],
      productDescription:  ['', [Validators.required, Validators.minLength(20)]],
      topSellingProduct: ['',[Validators.required]]
    });
  }
  get f() { return this.productsForm.controls; }

  public onSubmit():void{
    console.log(this.productsForm.value);
    this.submitted = true;
    if (this.productsForm.invalid) {
      return;
  }
  this.addNewProductService.addProductData(this.productsForm.value).subscribe((data:any)=>{
    this.responseData = data;
    this.router.navigate(['/admin/products'],
    {
      queryParams:{
      message : data.message
      }
    }
    );

});
// alert('User Registered successfully. Please login to continue');


}
onReset() {
  this.submitted = false;
  this.productsForm.reset();
}

}
