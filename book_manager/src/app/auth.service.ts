import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient, private router: Router) {}


  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { username, password }, { responseType: 'text' })
      .pipe(
        tap((token: string) => {

          localStorage.setItem('authToken', token);

          const userType = username === 'admin' ? 'admin' : 'user';
          localStorage.setItem('userType', userType);

          this.router.navigate([userType === 'admin' ? '/admin' : '/']);
        })
      );
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
