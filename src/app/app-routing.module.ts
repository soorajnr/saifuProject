import { MainComponent } from './pages/main/main.component';
import { UnauthenticatedGuard } from './guards/unauthenticated/unauthenticated.guard';
import { AuthenticatedGuard } from './guards/authenticated/authenticated.guard';
import { LoginComponent } from './pages/login/login.component';
import { DashComponent } from './parts/dash/dash.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './pages/masters/customer/customer.component';
import { DistributersComponent } from './pages/masters/distributers/distributers.component';
import { ItemMasterComponent } from './pages/masters/item-master/item-master.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: 'forgot',
    component: ForgotPasswordComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: '',
    component: DashComponent,
    canActivate: [AuthenticatedGuard],
    children: [
      { component: MainComponent, path: 'main' },
      { component: CustomerComponent, path: 'customer' },
      { component: DistributersComponent, path: 'distribution' },
      { component: ItemMasterComponent, path: 'item-master' },
      { component: MainComponent, path: 'main4' },
      { component: MainComponent, path: 'main5' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
