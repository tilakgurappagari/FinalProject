import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CheckoutService } from 'src/app/services/checkout.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public userForm: FormGroup;
  public submitted: boolean = false;
  public productName: any;
  public productId: any;
public price: any;
public discountedPrice: any;
public responseData: any;
currentUser: any;
currentUserSubscription: Subscription;
  public newPrice: any;
  public firstName: any;
  public lastName: any;
  public email: any;

  constructor(private formBuilder: FormBuilder, public router:Router, public authenticationService: AuthenticationService,
     public activatedRoute: ActivatedRoute, public checkoutService: CheckoutService) { 
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
        this.firstName=this.currentUser.user.firstName;
        this.lastName=this.currentUser.user.lastName;
        this.email=this.currentUser.user.email;
  });
}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params)=>{
      this.productId = params.get('productId');
      this.productName = params.get('productName');
      this.price = params.get('price');
      this.discountedPrice=params.get('discountedPrice');

    })
    this.newPrice = this.price-this.discountedPrice;



    this.initializeUserForm();
  }
  public initializeUserForm(){
    this.userForm = this.formBuilder.group({
      firstName:  ['', Validators.required],
      lastName:  ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      zip:['',[Validators.required,Validators.pattern('[1-9]{1}[0-9]{4}')]]



      
    });
  }
  get f() { return this.userForm.controls; }

  public onSubmit():void{
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
  }
  this.userForm.value.productId = this.productId;
  this.userForm.value.productName = this.productName;
  this.userForm.value.price = this.newPrice;

  this.checkoutService.addOrder(this.userForm.value).subscribe((data:any)=>{
    this.responseData = data;
    this.router.navigate(['/home'],
    {
      queryParams:{
      message : data.message
      }
    }
    );

});
alert('order Placed successfully.');
}



onReset() {
  this.submitted = false;
  this.userForm.reset();
}

}
