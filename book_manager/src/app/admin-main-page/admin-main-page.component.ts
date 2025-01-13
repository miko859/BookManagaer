import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.css']
})
export class AdminMainPageComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  createBook() {
    console.log('Book created!');
  }

  deleteBook() {
    console.log('Book deleted!');
  }
}
