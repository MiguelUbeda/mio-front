import { Component, Inject } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  user: User = new User (0, '', '', '');

  constructor(private userService: UserService,
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.user = data.user;
  }
  // Close dialog
  close(): void {
    this.dialogRef.close();
  }
  // Send to the API the new user data through updateUser in user service to update it
  updateUser(): void {
    this.userService.updateUser(this.user).subscribe(updatedUser => {
      this.user = updatedUser;
      this.dialogRef.close('saved');
    });
  }
  
}
