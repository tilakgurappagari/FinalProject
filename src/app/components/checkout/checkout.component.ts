import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public userForm: FormGroup;
  public submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, public router:Router) { 

  }

  ngOnInit(): void {
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
    console.log(this.userForm.valid);
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
  }
}
onReset() {
  this.submitted = false;
  this.userForm.reset();
}

}
