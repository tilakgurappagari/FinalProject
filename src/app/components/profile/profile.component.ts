import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  currentUserSubscription: Subscription;
  firstName: any;
  lastName: any;
  phone: any;
  email: any;
  role: any;
  isAdmin: boolean = false;
  isUser: boolean = false;
  constructor( public router: Router, public authenticationService: AuthenticationService) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
      //console.log(this.currentUser.user.firstName);
      this.firstName=this.currentUser.user.firstName;
      this.lastName=this.currentUser.user.lastName;
      this.email=this.currentUser.user.email;
      this.phone=this.currentUser.user.phone;
      this.role = this.currentUser.user.role;
      if(this.role.toLowerCase()==="admin")
          this.isAdmin=true;
      else
        this.isUser=true;

    
         });
  }
  ngOnInit(): void {
  }

}
