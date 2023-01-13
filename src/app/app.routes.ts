import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';

const ROUTES: Routes = [
 
  { path: 'sign-up', component: SignUpComponent},
  { path: 'user', component: UserComponent},
  { path:'', component: UserComponent },

];

export { ROUTES };