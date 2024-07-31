import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './pages/menu/dashbord/dashbord.component';
import { LoginComponent } from './pages/devise/login/login.component';
import { RegisterComponent } from './pages/devise/register/register.component';
import { EmployementComponent } from './pages/menu/employement/employement.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashbordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'employements', component: EmployementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
