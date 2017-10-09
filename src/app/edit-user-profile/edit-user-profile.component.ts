import { Component, OnInit } from '@angular/core';

import { UserProfileComponent } from "../user-profile/user-profile.component"

import { EditUserProfileService } from '../edit-user-profile/edit-user-profile.service';

import {Router} from '@angular/router'

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {
  newUserDetails = {};
  userDetails = {};
  keys = [];

  constructor(private eups: EditUserProfileService) {
  }
  ngOnInit() {
    this.getUserDetails((userDetails) => {
      for (let i in userDetails) {
        this.keys.push(i);
      }
    });
  }
  getUserDetails(cb) {
    this.eups.getUserProfile((result) => {
      if (result && result.status && result.status == 200 && result.data) {
        this.userDetails = result.data;
        cb(this.userDetails);
      }
    })
  }

  updateUserInfo() {
    this.eups.updateUserProfile(this.userDetails, (response) => {
      console.log("Response: ", response);
      if (response && response.status == 200 && response.message == "Success") {
        window.location.href="/"
      }else{
        alert("An error occurred while updating profile");
        window.location.href="/"        
      }
    })
  }

}
