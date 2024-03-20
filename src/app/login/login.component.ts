import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        if (response && response.token) {
          const token = response.token;
          localStorage.setItem('jwt', token);
          this.router.navigate(['/users']);
        }
      },
      (error) => {

      }
    );
  }

  loginWithGoogle() {
    window.location.href = `http://localhost:8000/connect/google`;
  }
}
