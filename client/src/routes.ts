import { Routes } from '@angular/router';
import { LoginFormComponent } from './app/login-form/login-form.component';
import { SignupFormComponent } from './app/signup-form/signup-form.component';
import { ProfileComponent } from './app/profile/profile.component';
import { EditUserComponent } from './app/edit-user/edit-user.component';

export const routes: Routes = [
    { path: 'signup', component: SignupFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'profile', component: ProfileComponent},
    { path: 'edit-user', component: EditUserComponent}

];