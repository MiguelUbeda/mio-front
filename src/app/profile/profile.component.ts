import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user!: User;

  constructor(private userService: UserService,   private snackBar: MatSnackBar) { }
  //Get users from user when page is load
  ngOnInit(): void {
    this.getLoggedUser();
  }
  // Send the get users petition to the API using geetUsers from userService 
  getLoggedUser(): void {
    this.userService.getLoggedUser().subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }

   // Send to the API the new user data through updateUser in user service to update it
   updateLoggedUser(): void {
    this.userService.updateLoggedUser(this.user).subscribe({
      next: (updatedUser) => {
        this.user = updatedUser;
        this.snackBar.open('Usuario actualizado correctamente', 'Cerrar', {
          duration: 3000, // El popup se cierra automáticamente después de 3 segundos
        });
      },
      error: (error) => {
        // Aquí manejas el error, mostrando otro mensaje, por ejemplo
        this.snackBar.open('Error al actualizar el usuario', 'Cerrar', {
          duration: 3000,
        });
      }
    });
  }
  
}
