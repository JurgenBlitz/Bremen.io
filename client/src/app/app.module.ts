import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { ThreadComponent } from './thread/thread.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { ShowAdComponent } from './show-ad/show-ad.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { InboxComponent } from './inbox/inbox.component';

import { RouterModule } from '@angular/router'
import { routes } from '../routes';

import { SessionService } from '../services/session.service';
import { MessageService } from '../services/message.service';
import { UserService } from '../services/user.service';
import { AdService } from '../services/ad.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ThreadComponent,
    SignupFormComponent,
    ProfileComponent,
    EditUserComponent,
    CreateAdComponent,
    AdListComponent,
    HomeComponent,
    ShowAdComponent,
    ProfileEditComponent,
    MapComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAdiQtjQt5GDzia8VnYtsQ3cyETkPbFXjU',
      libraries: ["places"]
    })
  ],
  providers: [SessionService, MessageService, UserService, AdService],
  bootstrap: [AppComponent]
})

export class AppModule { }
