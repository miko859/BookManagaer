import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    if (this.authService.login(this.username, this.password)) {
      // If login is successful, redirect to appropriate page
      this.errorMessage = '';
    } else {
      // If login fails, show an error message
      this.errorMessage = 'Invalid credentials!';
    }
  }
}
