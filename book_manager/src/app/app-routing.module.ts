import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';
import {AddBookPageComponent} from "./add-book-page/add-book-page.component";


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/add-book', component: AddBookPageComponent },
  { path: 'admin', component: AdminMainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
