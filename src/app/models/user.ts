export class User {
    id: number;
    email: string;
    username: string;
    password: string;
    biography: string;
  
    constructor(id: number, email: string, username: string, password: string, biography: string) {
      this.id = id;
      this.email = email;
      this.username = username;
      this.password = password;
      this.biography = biography;
    }
  }
  