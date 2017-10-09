import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';

import { UserProfileService } from './user-profile/user-profile.service'
import { EditUserProfileService } from './edit-user-profile/edit-user-profile.service'


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    EditUserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
      "path": "myProfile",
      "component": UserProfileComponent
    },
    {
      "path": "editProfile",
      "component": EditUserProfileComponent
    }
    ])
  ],
  providers: [
    UserProfileService,
    EditUserProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
