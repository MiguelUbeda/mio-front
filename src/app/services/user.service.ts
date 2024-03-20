import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private usersApi = `${this.apiUrl}/users`;
  private userConfigApi = `${this.apiUrl}/user/config`;

  constructor(private http: HttpClient) { }
  // Create and CRUD of Users

  // Get the data from user users
  getUsers(): Observable<User[]> {
    return this.http.get<{ users: User[] }>(this.usersApi).pipe(
      map(response => response.users)
    );
  }
  // Get the data from logged user
  getLoggedUser(): Observable<User> {
    return this.http.get<{ user: User }>(this.userConfigApi).pipe(
      map(response => response.user)
    );
  }

  // Get the data from logged user
  updateLoggedUser(user: User): Observable<User> {
    return this.http.post<User>(this.userConfigApi, user);
  }
  // Send data from the form to API to add the new User
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersApi, user);
  }
  // Send data from the update form to API to update the selected user
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.usersApi}/${user.id}`, user);
  }
  // Send the delete to API through the user id to remove it
  deleteUser(user: User): Observable<any> {
    return this.http.delete(`${this.usersApi}/${user.id}`);
  }
}