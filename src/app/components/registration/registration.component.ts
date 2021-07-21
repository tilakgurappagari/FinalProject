import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveMustMatch } from '../../helpers/must-match.validator';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public userForm: FormGroup;
  public registerForm: FormGroup;
  public submitted: boolean = false;
  public model: any= {};

  constructor(private formBuilder: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.initializeUserForm();
  
  }
  public initializeUserForm(){
    this.userForm = this.formBuilder.group({
      fullname:  ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue]
    },
    {
      validator : ReactiveMustMatch('password','confirmPassword')
    }
    );
  }
  get f() { return this.userForm.controls; }

  public onSubmit():void{
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
  }
 //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value, null, 4));

    // this.model = this.userForm.getRawValue();
    // console.log(this.model);
    alert('User Registered successfully. Please login to continue');
    // console.log(this.model.password);

    // console.log(this.password.value);


    this.router.navigate(['/login'], 
    {
      queryParams:{
        fullName:  this.model.fullname,
        email: this.model.email,
        phone: this.model.phone,
        password: this.model.password,
      },
      skipLocationChange : true
    }
  );
  }

onReset() {
  this.submitted = false;
  this.userForm.reset();
}

}

