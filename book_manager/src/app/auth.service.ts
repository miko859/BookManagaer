import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }


  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userType');
    this.router.navigate(['/']);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }


  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  isAdmin(): boolean {
    return localStorage.getItem('userType') === 'admin';
  }
}
