import { Component, OnInit } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {
newUserDetails={};
city="";
  constructor() {
    this.newUserDetails =  new UserProfileComponent().userDetails
   }
   
  ngOnInit() {   
    console.log(this.city);    
  }
  
}
