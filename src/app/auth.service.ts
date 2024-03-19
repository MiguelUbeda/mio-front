import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/login_check';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    const body = { username: username, password: password };
    return this.http.post<string>(`http://127.0.0.1:8000/api/login_check`, body);
  }
  getToken(): string | null {
    return localStorage.getItem('jwt');
  }
}