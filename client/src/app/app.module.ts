import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { MessageComponent } from './message/message.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProfileComponent } from './profile/profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { AdListComponent } from './ad-list/ad-list.component';

import { RouterModule } from '@angular/router'
import { routes } from '../routes';

import { SessionService } from '../services/session.service';
import { MessageService } from '../services/message.service';
import { UserService } from '../services/user.service';
import { AdsService } from '../services/ads.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    MessageComponent,
    SignupFormComponent,
    ProfileComponent,
    EditUserComponent,
    CreateAdComponent,
    AdListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [SessionService, MessageService, UserService, AdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
