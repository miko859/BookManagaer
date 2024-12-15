import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router for navigation

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(private router: Router) {}  // Inject the router

  // Method to navigate to the login page
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
