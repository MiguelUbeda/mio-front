import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:8000/api/users';

  constructor(private http: HttpClient) { }
  // Create and CRUD of Users

  // Get the data from user users
  getUsers(): Observable<User[]> {
    return this.http.get<{ users: User[] }>(this.apiUrl).pipe(
      map(response => response.users)
    );
  }
  // Send data from the form to API to add the new User
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
  // Send data from the update form to API to update the selected user
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }
  // Send the delete to API through the user id to remove it
  deleteUser(user: User): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${user.id}`);
  }
}