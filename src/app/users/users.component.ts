import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { MatDialog } from "@angular/material/dialog";
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  createFormVisible = false;
  editFormVisible = false;
  newUser!: User;
  selectedUser!: User;
  selectedUsers: User[] = [];
  mostrarArticleComponent: any[] = [];

  constructor(private userService: UserService, private dialog: MatDialog) { }
  //Get users from user when page is load
  ngOnInit(): void {
    this.getUsers();
  }
  // Send the get users petition to the API using geetUsers from userService 
  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  // Show the form to edit the user from selectedUser
  showEditForm(user: User): void {
    this.selectedUser = Object.assign({}, user);
    // Is copied to dont modify original object
    const userCopy = Object.assign({}, this.selectedUser);
    // Give EditUserComponent (Angular material) user data to update it
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: { user: userCopy },
      panelClass: 'edit-user-container',
      width: '800px'
    });

    // Find the original user and save new changes if result is saved, after being closed
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        const index = this.users.findIndex(user => user.id === userCopy.id);
        this.users[index] = userCopy;
        this.selectedUser = new User(0, '', '', '', '');
      }
    });
  }
  closeDialog() {
    this.closeDialog()
  }

  // Send the delete user petition to the API using deleteUser from userService 
  deleteUser(user: User): void {
    if (window.confirm('¿Estás seguro de que deseas eliminar este user?')) {
      this.userService.deleteUser(user).subscribe(() => {
        this.users = this.users.filter(f => f.id !== user.id);
      });
    }
  }
  // Add/Remove user user from array of selectedUsers
  toggleUserSelection(user: User): void {
    const index = this.selectedUsers.findIndex(f => f.id === user.id);
    if (index === -1) {
      this.selectedUsers.push(user);
    } else {
      this.selectedUsers.splice(index, 1);
    }
  }
  // Send the delete of the users in selectedUsers to the API using deleteUser from userService 
  deleteSelectedUsers(): void {
    if (window.confirm('¿Estás seguro de que deseas eliminar estos users?')) {
      this.selectedUsers.forEach(user => {
        this.userService.deleteUser(user).subscribe(() => {
          this.users = this.users.filter(f => f.id !== user.id);
        });
      });
    }
    this.selectedUsers = [];
  } 
}
