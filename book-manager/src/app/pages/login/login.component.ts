import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj = {
    username: '',
    password: ''
  };

  http = inject(HttpClient);

  onlogin() {
    this.http.post('/api/login', this.loginObj)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
