import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private router: Router, private http: HttpClient) { }
  //Get the value from data in the Registro form and send it to /register in Symfony API
  registro() {
    const data = {
      username: this.username,
      password: this.password,
      email: this.email
    };
    //After that, if the register went OK, it will redirect you to the Login page
    this.http.post('http://127.0.0.1:8000/api/register', data).subscribe(
      response => {
        this.router.navigate(['/login']);
      },
      error => {

      }
    );

  }
}