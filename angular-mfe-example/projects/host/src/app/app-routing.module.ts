import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProfileComponent } from './profile/profile.component';
import { MsalGuard } from '@azure/msal-angular';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      import('remoteapp1/homeModule').then((module) => module.HomeModule),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      import('remoteapp2/homeModule').then((module) => module.HomeModule),
  },
  // { path: 'profile', component: ProfileComponent, canActivate: [MsalGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
