import { Routes, RouterModule } from '@angular/router';

import { AddUserComponent } from './views/add-user/add-user.component';
import { LoginComponent } from './views/login/login.component';

const appRoutes: Routes = [
		{ path: '', redirectTo: './add-user', pathMatch: 'full' },
    { path: 'add-user', component: AddUserComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'add-user'}
  ];

export const AppRoutes = RouterModule.forRoot(appRoutes);
