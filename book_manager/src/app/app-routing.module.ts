import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },  // Main page for regular users
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminMainPageComponent },  // Admin route with guard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
