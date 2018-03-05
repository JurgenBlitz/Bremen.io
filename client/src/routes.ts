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

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'signup', component: SignupFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'profile/:id', component: ProfileComponent},
    { path: 'edit-user/:id', component: EditUserComponent},
    { path: 'edit-profile/:id', component: ProfileEditComponent},
    { path: 'ads/new', component: CreateAdComponent},
    { path: 'show/:id', component: ShowAdComponent},
    { path: 'adlist', component: AdListComponent }
];