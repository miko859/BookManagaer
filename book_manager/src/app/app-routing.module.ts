import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { BookPageComponent } from './book-page/book-page.component';
import { AddBookPageComponent } from './add-book-page/add-book-page.component';
import { AdminBookPageComponent } from './admin-book-page/admin-book-page.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'books', component: BookPageComponent },
  { path: 'add-book', component: AddBookPageComponent, canActivate: [AdminGuard] },
  { path: 'admin/book/:id', component: AdminBookPageComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
