import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';

import { SessionService } from '../services/session.service';
import { MessageService } from '../services/message.service';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [SessionService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
