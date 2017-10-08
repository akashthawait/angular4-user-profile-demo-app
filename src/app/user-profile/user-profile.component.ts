import { Component, OnInit } from '@angular/core';

import {UserProfileService} from './user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  // Declaring variable which contains default values
  // userDetails = {};
  // newUserDetails = {};
  constructor( private ups: UserProfileService) {
    // this.userDetails = {
    //   first_name: "Akash",
    //   last_name: "Thawait",
    //   name: "Akash Thawait",
    //   email_address: "aakashthawait@gmail.com",
    //   city: "Bangalore",
    //   phone_number: "7204720413",
    //   work: "Software Engineer at Litmus World",
    //   bio: "A MEAN Stack developer in litmus World Marketing Technologies Private Limited From April-2016 to till date. Born, raised and completed schooling in Bilaspur, Chattisgarh. After completed MCA from Bhilai Institute of Technology Durg in 2015, joined LitmusWorld on 2016. Having experience in working with Mongo DB, Express.Js, Angular.js, Node.js and JavaScript.Also having experience in working with Mongo DB and Elasticsearch."
    // }
  }
  ngOnInit() {
    this.ups.getUserProfile();
  }
}
