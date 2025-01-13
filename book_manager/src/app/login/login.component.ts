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
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {

        console.log('Login successful:', response);
        this.errorMessage = '';
      },
      error: (error) => {

        console.error('Login failed:', error);
        this.errorMessage = 'Invalid credentials!';
      }
    });
  }
}

