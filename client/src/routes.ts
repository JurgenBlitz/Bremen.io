import { Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginFormComponent } from './app/login-form/login-form.component';
import { SignupFormComponent } from './app/signup-form/signup-form.component';
import { ProfileComponent } from './app/profile/profile.component';
import { EditUserComponent } from './app/edit-user/edit-user.component';
import { HomeComponent } from './app/home/home.component';
import { CreateAdComponent } from './app/create-ad/create-ad.component';
import { ShowAdComponent } from './app/show-ad/show-ad.component';
import { ProfileEditComponent } from './app/profile-edit/profile-edit.component';
import { AdListComponent } from './app/ad-list/ad-list.component';
import { InboxComponent } from './app/inbox/inbox.component';
import { ThreadComponent } from './app/thread/thread.component';
import { AboutComponent } from './app/about/about.component';

export const routes: Routes = [
    { path: '', component: AppComponent},
    { path: 'signup', component: SignupFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'profile/:id', component: ProfileComponent},
    { path: 'edit-user/:id', component: EditUserComponent},
    { path: 'edit-profile/:id', component: ProfileEditComponent},
    { path: 'ads/new', component: CreateAdComponent},
    { path: 'show/:id', component: ShowAdComponent},
    { path: 'list', component: AdListComponent },
    { path: 'inbox/:id', component: InboxComponent },
    { path: 'thread/new/:id', component: ThreadComponent },
    { path: 'about', component: AboutComponent }
];