import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ErrorService } from '../services/error.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private errorService: ErrorService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', this.authService.getRoleFromToken(response.token));
        this.router.navigate(['/books']);
      },
      (error: any) => {
        this.errorService.showError('Invalid username or password');
      }
    );
  }
}
