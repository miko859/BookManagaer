import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private adminCredentials = { username: 'admin', password: '1245' };

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Check if the username and password match the admin credentials
    if (username === this.adminCredentials.username && password === this.adminCredentials.password) {
      localStorage.setItem('userType', 'admin');
      this.router.navigate(['/admin']);
      return true;
    }
    // If credentials are not admin, it's treated as a regular user login
    localStorage.setItem('userType', 'user');
    this.router.navigate(['/']);
    return true;
  }

  logout() {
    localStorage.removeItem('userType');
    this.router.navigate(['/']);
  }

  getUserType() {
    return localStorage.getItem('userType');
  }

  isAdmin() {
    return this.getUserType() === 'admin';
  }
}
