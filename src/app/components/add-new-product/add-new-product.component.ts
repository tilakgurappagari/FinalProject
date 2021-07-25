import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  public productsForm: FormGroup;
  public submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, public router:Router) { 

  }

  ngOnInit(): void {
    this.initializeUserForm();
  }
  public initializeUserForm(){
    this.productsForm = this.formBuilder.group({
      productName:  ['', [Validators.required, Validators.maxLength(64)]],
      department:  ['', Validators.required],
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
}
onReset() {
  this.submitted = false;
  this.productsForm.reset();
}

}
