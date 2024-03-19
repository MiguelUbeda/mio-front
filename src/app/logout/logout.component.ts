import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router: Router, private authService: AuthService) {}
  // Remove jwt token from local storage and redirect to /login
  logout() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }
}
