import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { MessageComponent } from './message/message.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProfileComponent } from './profile/profile.component';

import { RouterModule } from '@angular/router'
import { routes } from '../routes';

import { SessionService } from '../services/session.service';
import { MessageService } from '../services/message.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    MessageComponent,
    SignupFormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [SessionService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }