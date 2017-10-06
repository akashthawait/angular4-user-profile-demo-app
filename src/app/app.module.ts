import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    EditUserProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      "path":"myProfile",
      "component":UserProfileComponent
    },
    {
      "path":"editProfile",
      "component":EditUserProfileComponent
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
