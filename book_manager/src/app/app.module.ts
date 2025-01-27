import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';
import { AddBookPageComponent } from './add-book-page/add-book-page.component';
import {HttpClientModule} from "@angular/common/http";
import { BookPageComponent } from './book-page/book-page.component';
import { AdminBookPageComponent } from './admin-book-page/admin-book-page.component';
import { ErrorComponent } from './error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    AdminMainPageComponent,
    AddBookPageComponent,
    BookPageComponent,
    AdminBookPageComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
