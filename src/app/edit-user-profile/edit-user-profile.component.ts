import { Component, OnInit } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {
  newUserDetails = {};
  keys = [];
  constructor() {
    // this.newUserDetails = new UserProfileComponent().userDetails
  }

  ngOnInit() {
    // for (let i in this.newUserDetails) {
    //   this.keys.push(i);
    // }
  }
  updateUserInfo() {
    // console.log('New User Details: ', this.newUserDetails);
  }
}
