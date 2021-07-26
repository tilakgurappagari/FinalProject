import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { ReactiveMustMatch } from '../../helpers/must-match.validator';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public userForm: FormGroup;
  public submitted: boolean = false;
  public responseData : any;

  constructor(private formBuilder: FormBuilder, public router: Router, public registerService: RegisterServiceService) { }

  ngOnInit(): void {
    this.initializeUserForm();
  
  }
  public initializeUserForm(){
    this.userForm = this.formBuilder.group({
      firstName:  ['', Validators.required],
      lastName:  ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
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
   
    this.registerService.setData(this.userForm.value).subscribe((data:any)=>{
        this.responseData = data;
        this.router.navigate(['/login'],
        {
          queryParams:{
          message : data.message
          }
        }
        );

    });
    alert('User Registered successfully. Please login to continue');
  }

onReset() {
  this.submitted = false;
  this.userForm.reset();
}

}

