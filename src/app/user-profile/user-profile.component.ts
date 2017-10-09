import { Component, OnInit } from '@angular/core';

import { UserProfileService } from './user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  // Declaring variable which contains default values
  userDetails = {};
  keys = [];

  constructor(private ups: UserProfileService) {
  }
  ngOnInit() {
    this.getUserDetails((userDetails) => {
      for (let i in userDetails) {
        this.keys.push(i);
      }
    });
  }
  getUserDetails(cb) {
    this.ups.getUserProfile((result) => {
      if (result && result.status && result.status == 200 && result.data) {
        this.userDetails = result.data;
        cb(this.userDetails);
      }
    })
  }

}
