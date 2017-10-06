import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  // Declaring variable which contains default values
  userDetails = {};
  constructor() {
    this.userDetails = {
      first_name: "Akash",
      last_name: "Thawait",
      name: "Akash Thawait",
      email_address: "aakashthawait@gmail.com",
      city: "Bangalore",
      phone_number: "7204720413",
      work: "Software Engineer at Litmus World",
      bio: "A MEAN Stack developer in litmus World Marketing Technologies Private Limited From April-2016 to till date. Born and raised in Bilaspur, Chattisgarh. Done MCA from Bhilai Institute of Technology in 2015 then Join LitmusWorld on 2016. Experience in working with Mongo DB, Express.Js, Angular.js, Node.js, JavaScript.Also having experience in working with Mongo DB and Elasticsearch."
    }
  }
  ngOnInit() {
  }
}
