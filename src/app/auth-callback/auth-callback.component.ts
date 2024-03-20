import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  template: `<p>Redirigiendo...</p>`,
})
export class AuthCallbackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Will set the JWT token after a successfully login with OAuth
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        localStorage.setItem('jwt', token);
        this.router.navigate(['/users']);
      } else {
        this.router.navigate(['/login'], { queryParams: { error: 'No se pudo autenticar.' }});
      }
    });
  }
}
